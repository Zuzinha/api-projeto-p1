const { Product, ProductCategory, ProductSituation } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const products = await Product.findAll({
        include: [ProductCategory, ProductSituation]
      });
      return res.json(products);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async store(req, res) {
    try {
      const { name, productSituationId, productCategoryId } = req.body;
      const product = await Product.create({ name, productSituationId, productCategoryId });
      return res.status(201).json(product);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
};