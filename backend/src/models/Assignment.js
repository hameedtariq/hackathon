const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
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

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
