const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true, unique: true, index: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, // Supports Guest Checkout
  guestInfo: {
    name: String,
    email: String,
    phone: String
  },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    title: String,
    image: String,
    price: Number,
    quantity: Number,
    selectedColor: String,
    selectedSize: String
  }],
  shippingAddress: {
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  upazila: { type: String },
  city: { type: String, required: true },
  division: { type: String },
  postalCode: String,
  country: { type: String, default: "Bangladesh" }
},
  paymentMethod: { type: String, enum: ['COD', 'ONLINE'], default: 'COD' },
  paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
  orderStatus: {
  type: String,
  enum: [
    "pending",
    "confirmed",
    "processing",
    "packed",
    "shipped",
    "in_transit",
    "out_for_delivery",
    "delivered",
    "return_requested",
    "returned",
    "refunded",
    "cancelled"
  ],
  default: "pending"
},
  statusHistory: [
  {
    status: {
      type: String,
      required: true
    },

    note: {
      type: String,
      default: ""
    },

    changedBy: {
      type: String,
      default: "system"
    },

    changedAt: {
      type: Date,
      default: Date.now
    }
  }
],
  subtotal: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  shippingCost: { type: Number, required: true },
  total: { type: Number, required: true },
  trackingNumber: { type: String }
}, { timestamps: true });

module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);