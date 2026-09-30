// controllers/productController.js
const Product = require('../models/product');

exports.getProducts = async (req, res) => {
  try {
    const { page = 1, limit = 12, category, minPrice, maxPrice, sort, search, color, size } = req.query;
    
    let query = { status: 'active' };

    if (category) query.category = category;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    if (color) query['colors.name'] = color;
    if (size) query.sizes = size;
    if (search) {
      query.$text = { $search: search };
    }

    // Sorting Logic
    let sortOptions = { createdAt: -1 };
    if (sort === 'price-low') sortOptions = { price: 1 };
    if (sort === 'price-high') sortOptions = { price: -1 };
    if (sort === 'popular') sortOptions = { bestseller: -1 };

    const skip = (Number(page) - 1) * Number(limit);

    const [products, total] = await Promise.all([
      Product.find(query)
        .select('title slug price compareAtPrice discount images colors sizes stock bestseller newArrival')
        .sort(sortOptions)
        .skip(skip)
        .limit(Number(limit))
        .lean(),
      Product.countDocuments(query)
    ]);

    res.status(200).json({
      success: true,
      data: products,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};