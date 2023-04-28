const Instructor = require('../models/Instructor')
const APIError = require('../utils/ApiError')
const sendToken = require('../utils/jwtToken')

const instructorRegisterController = async (req, res) => {
  const { firstName, lastName, email, password, instructorId } = req.body
  if (!firstName || !lastName || !email || !password || !instructorId) {
    throw APIError.badRequest('Please provide complete information')
  }
  const alreadyEmail = await Instructor.findOne({
    email,
  })
  if (alreadyEmail) {
    throw APIError.badRequest(
      'Instructor already exists with the given email address'
    )
  }
  const alreadyRoll = await Instructor.findOne({
    instructorId,
  })
  if (alreadyRoll) {
    throw APIError.badRequest(
      'Instructor already exists with the given roll number'
    )
  }
  const instructor = new Instructor({
    firstName,
    lastName,
    email,
    password,
    instructorId,
  })
  await instructor.save()
  sendToken(instructor, 200, res)
}

module.exports = { instructorRegisterController }
