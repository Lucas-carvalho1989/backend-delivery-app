const { Product } = require('../models');

export const productsModel = {
  getAllProducts: async () => {
    const products = await Product.findAll();
    
    return products;
  },     
}