const Student = require('../models/Student')
const APIError = require('../utils/ApiError')
const Course = require('../models/Course')
const sendToken = require('../utils/jwtToken')

const studentRegisterController = async (req, res) => {
  const { firstName, lastName, email, password, rollNumber } = req.body
  if (!firstName || !lastName || !email || !password || !rollNumber) {
    throw APIError.badRequest('Please provide complete information')
  }
  const alreadyEmail = await Student.findOne({
    email,
  })
  if (alreadyEmail) {
    throw APIError.badRequest(
      'Student already exists with the given email address'
    )
  }
  const alreadyRoll = await Student.findOne({
    rollNumber,
  })
  if (alreadyRoll) {
    throw APIError.badRequest(
      'Student already exists with the given roll number'
    )
  }
  const student = new Student({
    firstName,
    lastName,
    email,
    password,
    rollNumber,
  })
  await student.save()
  sendToken(student, 200, res)
}

const getStudentCourses = async (req, res) => {
  const { id } = req.user
  const student = await Student.findById(id).populate('courses.courseId')
  res.status(200).json({ courses: student.courses })
}

const enrollCourse = async (req, res) => {
  const { id } = req.user
  const { courseId } = req.params
  const student = await Student.findById(id)
  if (!student) {
    throw APIError.badRequest('Student not found')
  }
  const course = await Course.findById(courseId)
  if (!course) {
    throw APIError.badRequest('Course not found')
  }
  const alreadyEnrolled = student.courses.find(
    (course) => course.courseId.toString() === courseId
  )
  if (alreadyEnrolled) {
    throw APIError.badRequest('You have already enrolled in this course')
  }
  student.courses.push({
    courseId,
  })
  await student.save()
  res.status(200).json({ courses: student.courses })
}

module.exports = { studentRegisterController, getStudentCourses, enrollCourse }
