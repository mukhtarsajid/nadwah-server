const express = require ('express');
const product = require('../models/product');
const router = express.Router();


router.get('/allProducts',async(req,res)=>{
try{
    const products =  await product.find();
    res.send(products)
}catch(err){
    res.status(500).send({massage:err.massage})
}
})
module.exports = router;


// GET single product details (public)

router.get('/:id', async (req, res) => {
  try {
    const productData = await product.findById(req.params.id);

    if (!productData) {
      return res.status(404).send({
        message: 'Product not found'
      });
    }

    res.send(productData);
  } catch (err) {
    res.status(500).send({
      message: err.message
    });
  }
});