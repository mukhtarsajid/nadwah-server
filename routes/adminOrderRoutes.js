const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const { updateStatus } = require("../services/order-service");
// Router(1)
router.get("/",async(req,res)=>{
    try{
       const { status, page = 1, limit = 20 } = req.query;

  const filter = status ? { orderStatus: status } : {};
  const skip = (Number(page) - 1) * Number(limit);

  const [orders, total] = await Promise.all([
    Order.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit))
      .lean(),
    Order.countDocuments(filter)
  ]);

  res.json({
    success: true,
    orders,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      pages: Math.ceil(total / Number(limit))
    }
  });
}catch(err){
    res.status(500).send({massage:err.massage})
}
});

// Router(2)
// =========================
// UPDATE ORDER STATUS
// =========================

router.patch("/:id/status", async (req, res) => {

  try {

    console.log("=================================");
    console.log("STATUS UPDATE REQUEST");
    console.log("Order ID:", req.params.id);
    console.log("Requested status:", req.body.status);
    console.log("Request body:", req.body);
    console.log("=================================");


    const order = await updateStatus(
      req.params.id,
      req.body.status,
      req.body.note || "",
      "admin"
    );


    console.log("=================================");
    console.log("UPDATED ORDER");
    console.log("Order status:", order.orderStatus);
    console.log("Status history:", order.statusHistory);
    console.log("=================================");


    res.status(200).json({
      success: true,
      message: "Order status updated",
      order
    });


  } catch (error) {

    console.error("STATUS UPDATE ERROR:", error);

    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message
    });

  }

});


    // router.patch("/:id/status", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status, note = "" } = req.body;

//     console.log("Status update request:", {
//       id,
//       status,
//       note,
//     });

//     const order = await updateStatus(
//       id,
//       status,
//       note,
//       "admin"
//     );

//     res.status(200).json({
//       success: true,
//       message: "Order status updated",
//       order,
//     });

//   } catch (err) {

//     console.error("Status update error:", err);

//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// });
// Router(3)
router.post("/:id/ship", async (req, res) => {
  try {

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    if (order.orderStatus !== "packed") {
      return res.status(409).json({
        success: false,
        message: "Order must be packed before shipping",
      });
    }

    const shipment = await createShipment(order);

    order.courier = shipment;

    order.orderStatus = "shipped";

    order.statusHistory.push({
      status: "shipped",
      note: `Shipment created via ${shipment.provider}`,
      changedBy: "admin",
    });

    await order.save();

    res.status(200).json({
      success: true,
      message: "Order shipped successfully",
      order,
    });

  } catch (err) {

    console.error("Shipping error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
