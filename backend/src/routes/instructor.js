const express = require('express')

const router = express.Router()
const {
  instructorRegisterController,
  userLoginController,
  logoutController,
} = require('../controllers')
router.route('/login').post(userLoginController)
router.route('/register').post(instructorRegisterController)
router.route('logout').get(logoutController)
module.exports = router
