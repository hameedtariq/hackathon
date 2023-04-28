const { userLoginController, logoutController } = require('./login')
const { studentRegisterController } = require('./student')
const { instructorRegisterController } = require('./instructor')

module.exports = {
  userLoginController,
  studentRegisterController,
  instructorRegisterController,
  logoutController,
}
