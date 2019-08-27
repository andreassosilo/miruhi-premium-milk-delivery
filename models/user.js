'use strict'
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {
    static associate (models) {
      User.hasMany(models.Order)
    }
  }

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please fill the name!'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please fill with your phone number!'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Please fill with the correct email format!'
        }
      }
    },
    password: DataTypes.STRING,
    address: DataTypes.STRING
  }, { sequelize })

  return User
}
