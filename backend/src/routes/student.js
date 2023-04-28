const express = require('express')

const router = express.Router()
const {
  studentRegisterController,
  userLoginController,
  logoutController,
} = require('../controllers')
router.route('/login').post(userLoginController)
router.route('/register').post(studentRegisterController)
router.route('/logout').get(logoutController)
module.exports = router
