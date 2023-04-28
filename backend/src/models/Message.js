const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
      required: true,
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'chatroom',
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('message', MessageSchema)
