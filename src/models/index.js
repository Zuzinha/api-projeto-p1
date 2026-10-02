const sequelize = require('../config/database');
const Situation = require('./Situation');
const User = require('./User');
const ProductCategory = require('./ProductCategory');
const ProductSituation = require('./ProductSituation');
const Product = require('./Product');

// Relações conforme o diagrama
Situation.hasMany(User, { foreignKey: 'situationId' });
User.belongsTo(Situation, { foreignKey: 'situationId' });

ProductSituation.hasMany(Product, { foreignKey: 'productSituationId' });
Product.belongsTo(ProductSituation, { foreignKey: 'productSituationId' });

ProductCategory.hasMany(Product, { foreignKey: 'productCategoryId' });
Product.belongsTo(ProductCategory, { foreignKey: 'productCategoryId' });

module.exports = {
  sequelize,
  Situation,
  User,
  ProductCategory,
  ProductSituation,
  Product
};