const express = require('express');
//. nuvarande katalog, .. hoppa ut katalogen
//const { readProducts } = require('../models/products.js');
const { getAllProducts, getProduct } = require('../models/products.js');
const productRoute = express.Router();

productRoute.get('/', async (req, res) => {
  //const products = await readProducts();
  const product = await getAllProducts();
  res.json({ product });
});

productRoute.get('/:sku', async (req, res) => {
  //const { products } = await readProducts();
  //const product = products.find(({ sku }) => sku === req.params.sku);
  const product = await getProduct(req.params.sku);
  if (product) {
    res.json(product);
  } else {
    res.sendStatus(404);
  }
});
module.exports = { productRoute };
