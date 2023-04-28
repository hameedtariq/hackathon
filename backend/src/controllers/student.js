const Student = require('../models/Student')
const APIError = require('../utils/ApiError')
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

module.exports = { studentRegisterController }
