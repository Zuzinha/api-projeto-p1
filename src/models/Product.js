const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('products', {
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  productSituationId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  productCategoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Product;