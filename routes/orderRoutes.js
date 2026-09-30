const express = require("express");

const { createOrder} = require("../services/order-service");

const Order = require("../models/Order");

const router = express.Router();


// =========================
// CREATE ORDER
// =========================

router.post("/", async (req, res) => {
  try {
    const order = await createOrder(req.body);

    res.status(201).json({
      success: true,
      order
    });

  } catch (error) {
    console.error("Create order error:", error);

    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message
    });
  }
});


// =========================
// GET ORDER BY ID
// =========================

router.get("/:id", async (req, res) => {
  try {

    const order = await Order
      .findById(req.params.id)
      .populate("items.product", "title slug images");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    res.status(200).json({
      success: true,
      order
    });

  } catch (error) {

    console.error("Get order error:", error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


module.exports = router;