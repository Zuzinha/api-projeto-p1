const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProductCategory = sequelize.define('product_categories', {
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
});

module.exports = ProductCategory;