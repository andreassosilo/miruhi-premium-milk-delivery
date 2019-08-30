'use strict'

// Function to check if there is session
function isLogin(req, res, next) {
  console.log(req.session)
  if (req.session.email) {
    next()
  } else {
    res.redirect(`/login?err=Please login first!`)
  }
}

module.exports = isLogin