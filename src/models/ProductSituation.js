const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProductSituation = sequelize.define('product_situations', {
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
});

module.exports = ProductSituation;