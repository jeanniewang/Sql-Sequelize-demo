'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PetOwner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // many side
      PetOwner.belongsTo(models.Pet, { foreignKey: 'petId' });
      PetOwner.belongsTo(models.Owner, { foreignKey: 'ownerId'});
    }
  }
  PetOwner.init({
    petId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    ownerId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
  }, {
    sequelize,
    modelName: 'PetOwner',
  });
  return PetOwner;
};