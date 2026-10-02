const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Situation = sequelize.define('situations', {
  nameSituation: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
});

module.exports = Situation;