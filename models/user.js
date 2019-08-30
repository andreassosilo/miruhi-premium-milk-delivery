'use strict'

const encrypt = require('../helpers/encryption')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {
    static associate(models) {
      User.hasMany(models.Order)
    }
  }

  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please fill with your full name!'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please fill with your phone number!'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please fill the e-mail!'
        },
        isEmail: {
          args: true,
          msg: 'Please fill with the correct email format!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please fill the password!'
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please fill the delivery address!'
        }
      }
    }
  }, { sequelize })

  User.addHook('beforeCreate', (user, options) => {
    return User.findOne({
      where: {
        email: user.email
      }
    })
      .then((result) => {
        if (result) throw new Error('E-mail already exist!')
        // Using bcrypt
        user['password'] = encrypt.hash(user.password)
      })
  })
  return User
}
