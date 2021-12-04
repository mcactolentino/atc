const express = require('express');
const router = express.Router();

const {getAllProducts, getProductById} = require('../controller/productControllers');

//@desc Getting all products from our data base
//@route  GET /api/products
//@access Public
router.get('/', getAllProducts);

//@desc Getting a product in db with the use of its id
//@route  GET /api/products/:id
//@access Public
router.get('/:id', getProductById);

module.exports = router;