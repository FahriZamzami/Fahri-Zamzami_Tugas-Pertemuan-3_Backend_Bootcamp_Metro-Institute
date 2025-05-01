'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OperatorClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OperatorClass.init({
    operator_class: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OperatorClass',
    tableName: 'operatorClass'
  });
  return OperatorClass;
};