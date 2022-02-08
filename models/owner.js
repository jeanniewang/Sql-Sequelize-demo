'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one side
      Owner.hasMany(models.PetOwner, { foreignKey: 'ownerId'});

      const columeMapping = {
        through: 'PetOwner', // Join table
        foreignKey: 'ownerId', // Key that points this entity Pet
        otherKey: 'petId', 
      }
      Owner.belongsToMany(models.Pet, columeMapping);
    }
  }
  Owner.init({
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
  }, {
    sequelize,
    modelName: 'Owner',
  });
  return Owner;
};