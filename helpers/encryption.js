"use strict"
const bcrypt = require('bcryptjs')

module.exports = {
  hash(password) {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    return hash
  },
  compare(password, hash) {
    return bcrypt.compareSync(password, hash)
  }
}