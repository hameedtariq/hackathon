const Student = require('../models/Student')
const Instructor = require('../models/Instructor')
const APIError = require('../utils/ApiError')
const sendToken = require('../utils/jwtToken')
const userLoginController = async (req, res) => {
  const { email, password, role } = req.body
  if (!password || !email || !role) {
    throw APIError.badRequest(
      'Invalid Credentials! Please Provide complete information'
    )
  }
  if (role.toLowerCase() === 'student') {
    const student = await Student.findOne({ email })
    if (!student)
      throw APIError.notFound('No Student exists with the given email')
    const isPasswordValid = await student.comparePassword(password)
    if (!isPasswordValid) throw APIError.badRequest('Invalid password')
    sendToken(student, 200, res)
  } else if (role === 'instructor') {
    const instructor = await Instructor.findOne({ email })
    if (!instructor)
      throw APIError.notFound('No Instructor exists with the given email')
    const isPasswordValid = await instructor.comparePassword(password)
    if (!isPasswordValid) throw APIError.badRequest('Invalid password')
    sendToken(instructor, 200, res)
  }
}

const logoutController = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    // expire: new Date(Date.now()),
    expires: new Date(Date.now() + 5 * 1000), // This will remove the cookie in 5 seconds (Can't test in postman)
  })
  // res.status(StatusCodes.NO_CONTENT).end()
  res.status(200).json({ msg: 'User logged out' })
}

module.exports = { userLoginController, logoutController }
