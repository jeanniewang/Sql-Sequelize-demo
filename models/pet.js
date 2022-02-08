'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // MANY SIDEs
      Pet.belongsTo(models.PetType, { foreignKey: 'petTypeId'});

      const columeMapping = {
        through: 'PetOwner', // Join table
        foreignKey: 'petId', // Key that points this entity Pet
        otherKey: 'ownerId', 
      }
      Pet.belongsToMany(models.Owner, columeMapping);
    }
  }
  Pet.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    petTypeId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    age: {
      type:DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};