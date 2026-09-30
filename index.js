const express = require('express');
const cors = require('cors');
const ordersRoutes = require ('./routes/orderRoutes');
const adminOrderRoutes = require ('./routes/adminOrderRoutes');
const productsRoutes = require ('./routes/productRoute')
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

const app = express();


// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

// Root Route
app.get('/', (req, res) => {
  res.send('Ecommerce API is running running successfully...');
});

// routes
app.use('/api/products',productsRoutes)
app.use("/api/orders", ordersRoutes);
app.use("/api/admin/orders",adminOrderRoutes )
// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('You successfully connected to MongoDB!');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});