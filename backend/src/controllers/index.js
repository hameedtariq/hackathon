const { userLoginController, logoutController } = require('./login')
const { studentRegisterController,getStudentCourses,enrollCourse,getStudentAssignments } = require('./student')
const { instructorRegisterController } = require('./instructor')

module.exports = {
  userLoginController,
  studentRegisterController,
  instructorRegisterController,
  logoutController,
  getStudentCourses,
  enrollCourse,
  getStudentAssignments
}
