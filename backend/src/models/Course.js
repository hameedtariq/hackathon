const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
        type: String,
        required: true,
    },
    courseCode: {
        type: String,
        required: true,
    },
    instructorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Instructor",
    },
    courseContent: [
        {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            fileUrl: {
                type: String,
                required: true,
            },
        }
    ]
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
