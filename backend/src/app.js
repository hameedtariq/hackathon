const express = require('express')
const { errorHandler, notFound } = require('./middleware')
const { instructorRouter, courseRouter, assignmentRouter, studentRouter } = require('./routes')
const { connectDB } = require('./utils')
require('dotenv').config()
require('express-async-errors')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/api/v1/students/', studentRouter)
app.use('/api/v1/assignments/', assignmentRouter)
app.use('/api/v1/instructors/', instructorRouter)
app.use('/api/v1/courses/', courseRouter)

// This middleware handles requests to routes that don't exist
app.use(notFound)
// This middleware catches all the errors and sends appropriate response.
app.use(errorHandler)

// connect to database and listen for requests
const PORT = 5000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    )
  } catch (error) {
    console.log(error)
  }
}
start()
