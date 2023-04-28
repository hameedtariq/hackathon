const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    },
    fileUrl: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    submissions: [
        {
            studentId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Student",
            },
            fileUrl: {
                type: String,
                required: true,
            },
            grade: {
                type: String,
                enum: ['A','B','C','D','E','F']
            },
            evaluated: {
                type: Boolean,
                default: false,
            },
            feedback: {
                type: String,
                default: ""
            }
        }
    ]
  },
  { timestamps: true }
);

const Assignment = mongoose.model("Assignment", assignmentSchema);
module.exports = Assignment;
