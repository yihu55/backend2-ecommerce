// const fs = require('fs');
// const path = require('path');
// const util = require('util');

// //return a promise
// const readFile = util.promisify(fs.readFile);

// const readProducts = async () => {
//   const productsFile = path.join(__dirname, 'products.json');
//   const productJson = await readFile(productsFile);
//   return JSON.parse(productJson);
// };

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPrice: Number,
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const Product = mongoose.model('Product', productSchema);

const getAllProducts = async () => {
  return await Product.find();
};
const getProduct = async (sku) => {
  return await Product.findOne({ sku });
};
//return a lista
// const getAllProducts = async () => {
//   const { products } = await readProducts();
//   return products;
// };
// const getProduct = async (sku) => {
//   const { products } = await readProducts();
//   return products.find(({ product }) => product.sku === sku);
// };
//module.exports = { readProducts };
module.exports = { getAllProducts, getProduct };
