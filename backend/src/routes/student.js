const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router()
const {
  studentRegisterController,
  userLoginController,
  logoutController,
  getStudentCourses,
  enrollCourse,
} = require('../controllers')
router.route('/login').post(userLoginController)
router.route('/register').post(studentRegisterController)
router.route('/logout').get(logoutController)
router.route('/courses').get(authMiddleware, getStudentCourses);
router.route('/enroll/:courseId').post(authMiddleware, enrollCourse);
module.exports = router
