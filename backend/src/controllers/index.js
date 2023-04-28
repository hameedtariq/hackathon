const { userLoginController, logoutController } = require('./login')
const { studentRegisterController,getStudentCourses,enrollCourse } = require('./student')
const { instructorRegisterController } = require('./instructor')

module.exports = {
  userLoginController,
  studentRegisterController,
  instructorRegisterController,
  logoutController,
  getStudentCourses,
  enrollCourse,
}
