const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    members: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
)

const Room = mongoose.model('chatroom', RoomSchema)
module.exports = Room
