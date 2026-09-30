const mongoose = require("mongoose");
const Product = require("../models/Product.js");
const Order = require("../models/Order.js");

const ALLOWED_TRANSITIONS = {
  pending: ["confirmed", "cancelled"],
  confirmed: ["processing", "cancelled"],
  processing: ["packed", "cancelled"],
  packed: ["shipped"],
  shipped: ["in_transit", "out_for_delivery", "delivered"],
  in_transit: ["out_for_delivery", "delivered", "returned"],
  out_for_delivery: ["delivered", "returned"],
  delivered: ["return_requested"],
  return_requested: ["returned"],
  returned: ["refunded"],
  cancelled: [],
  refunded: []
};

function makeOrderNumber() {
  const stamp = new Date()
    .toISOString()
    .slice(0, 10)
    .replaceAll("-", "");

  const random = Math.floor(100000 + Math.random() * 900000);

  return `ORD-${stamp}-${random}`;
}

function pushHistory(
  order,
  status,
  note,
  changedBy = "system"
) {
  order.statusHistory.push({
    status,
    note,
    changedBy
  });
}


// =========================
// CREATE ORDER
// =========================

async function createOrder(payload) {
  const {
    productId,
    quantity,
    customer,
    paymentMethod = "COD"
  } = payload;

  // Validate Product ID
  if (!mongoose.isValidObjectId(productId)) {
    const e = new Error("Invalid product id");
    e.statusCode = 400;
    throw e;
  }

  // Validate Quantity
  const qty = Number(quantity);

  if (!Number.isInteger(qty) || qty < 1) {
    const e = new Error(
      "Quantity must be a positive integer"
    );

    e.statusCode = 400;
    throw e;
  }

  // Find Product
  const product = await Product.findOne({
    _id: productId,
    status: "active"
  });

  if (!product) {
    const e = new Error("Product not found");

    e.statusCode = 404;
    throw e;
  }

  // Check Stock
  if (product.stock < qty) {
    const e = new Error("Insufficient stock");

    e.statusCode = 409;
    throw e;
  }

  // Calculate Price
  // Never trust price sent by browser.
  const subtotal = product.price * qty;

  const deliveryCharge = 80;

  const total = subtotal + deliveryCharge;


  // Create Order
  const order = await Order.create({
  orderNumber: makeOrderNumber(),

  guestInfo: {
    name: customer.fullName,
    phone: customer.phone,
    email: customer.email || ""
  },

  items: [
    {
      product: product._id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: qty
    }
  ],

 shippingAddress: {
  fullName: customer.fullName,
  phone: customer.phone,
  address: customer.address,
  upazila: customer.upazila || "",
  city: customer.district,
  division: customer.division,
  postalCode: customer.postalCode || "",
  country: "Bangladesh"
},

  subtotal,

  shippingCost: deliveryCharge,

  total,

  paymentMethod,

  orderStatus: "pending",

  statusHistory: [
    {
      status: "pending",
      note: "Order placed",
      changedBy: "system"
    }
  ]
});

  return order;
}


// =========================
// UPDATE ORDER STATUS
// =========================

async function updateStatus(
  orderId,
  nextStatus,
  note = "",
  changedBy = "admin"
) {

  console.log("=================================");
  console.log("updateStatus() called");
  console.log("orderId:", orderId);
  console.log("nextStatus:", nextStatus);
  console.log("note:", note);
  console.log("changedBy:", changedBy);
  console.log("=================================");


  const order = await Order.findById(orderId);

  if (!order) {
    const e = new Error("Order not found");
    e.statusCode = 404;
    throw e;
  }

  console.log("Before update:", order.orderStatus);


  const current = order.orderStatus;


  if (!ALLOWED_TRANSITIONS[current]?.includes(nextStatus)) {

    const e = new Error(
      `Invalid transition: ${current} -> ${nextStatus}`
    );

    e.statusCode = 409;

    throw e;
  }


  // Confirm
  if (nextStatus === "confirmed") {

    for (const item of order.items) {

      const productId =
        item.product?._id ||
        item.product;

      const product = await Product.findById(productId);

      if (!product) {
        const e = new Error(
          `Product not found for ${item.title || "unknown product"}`
        );

        e.statusCode = 404;
        throw e;
      }


      if (product.stock < item.quantity) {

        const e = new Error(
          `Insufficient stock for ${
            item.title || product.title || "Unknown Product"
          }. Available: ${product.stock}, Required: ${item.quantity}`
        );

        e.statusCode = 409;
        throw e;
      }


      await Product.findByIdAndUpdate(
        productId,
        {
          $inc: {
            stock: -item.quantity
          }
        },
        {
          new: true
        }
      );

    }
  }


  // Cancel / Return
  if (
    ["cancelled", "returned"].includes(nextStatus)
  ) {

    const hadInventoryCommit =
      order.statusHistory.some(
        h => h.status === "confirmed"
      );

    const alreadyRestored =
      order.statusHistory.some(
        h =>
          ["cancelled", "returned"].includes(h.status)
      );


    if (
      hadInventoryCommit &&
      !alreadyRestored
    ) {

      for (const item of order.items) {

        const productId =
          item.product?._id ||
          item.product;

        await Product.findByIdAndUpdate(
          productId,
          {
            $inc: {
              stock: item.quantity
            }
          }
        );

      }
    }
  }


  // =========================
  // UPDATE STATUS
  // =========================

  order.orderStatus = nextStatus;


  pushHistory(
    order,
    nextStatus,
    note,
    changedBy
  );


  if (
    nextStatus === "delivered" &&
    order.paymentMethod === "COD"
  ) {
    order.paymentStatus = "collected";
  }


  console.log("Before save:", order.orderStatus);


  await order.save();


  console.log("After save:", order.orderStatus);


  return order;
}    


// async function updateStatus(
//   orderId,
//   nextStatus,
//   note = "",
//   changedBy = "admin"
// ) {
//   const order = await Order.findById(orderId);

//   if (!order) {
//     const e = new Error("Order not found");
//     e.statusCode = 404;
//     throw e;
//   }

//   const current = order.orderStatus;

//   // Check allowed transition
//   if (!ALLOWED_TRANSITIONS[current]?.includes(nextStatus)) {
//     const e = new Error(
//       `Invalid transition: ${current} -> ${nextStatus}`
//     );

//     e.statusCode = 409;
//     throw e;
//   }

//   // =========================
//   // CONFIRM ORDER
//   // =========================

//   if (nextStatus === "confirmed") {

//   for (const item of order.items) {

//     const productId = item.product?._id || item.product;

//     const product = await Product.findById(productId);

//     if (!product) {
//       const e = new Error(
//         `Product not found for order item`
//       );

//       e.statusCode = 404;
//       throw e;
//     }

//     if (product.stock < item.quantity) {
//       const productName =
//         item.title || product.title || "Unknown Product";

//       const e = new Error(
//         `Insufficient stock for ${productName}. Available: ${product.stock}, Required: ${item.quantity}`
//       );

//       e.statusCode = 409;
//       throw e;
//     }

//     await Product.findByIdAndUpdate(
//       productId,
//       {
//         $inc: {
//           stock: -item.quantity
//         }
//       },
//       {
//         new: true
//       }
//     );
//   }
// }

//   // =========================
//   // CANCEL / RETURN
//   // =========================

//   if (
//     ["cancelled", "returned"].includes(nextStatus)
//   ) {
//     const hadInventoryCommit =
//       order.statusHistory.some(
//         h => h.status === "confirmed"
//       );

//     const alreadyRestored =
//       order.statusHistory.some(
//         h =>
//           ["cancelled", "returned"].includes(h.status)
//       );

//     if (
//       hadInventoryCommit &&
//       !alreadyRestored
//     ) {
//       for (const item of order.items) {
//         await Product.findByIdAndUpdate(
//           item.product,
//           {
//             $inc: {
//               stock: item.quantity
//             }
//           }
//         );
//       }
//     }
//   }


//   // Save order
//   await order.save();


//   return order;
// }


// =========================
// EXPORT
// =========================

module.exports = {
  createOrder,
  updateStatus,
  ALLOWED_TRANSITIONS
};