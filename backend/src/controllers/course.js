const Course = require("../models/Course");
const ApiError = require("../utils/ApiError");

//TODO: ADD AUTHORIZATION

const getAllCourses = async (req, res) => {
    const courses = await Course.find({}).populate("instructor");
    res.status(200).json({ courses });
};

const createCourse = async (req, res) => {
    let courseContent = req.body.courseContent;
    if(courseContent) {
        courseContent = JSON.parse(courseContent);
    }
    if(req.files && req.files.length > 0) {
        req.files.map((file, index) => {
            courseContent[index].fileUrl = file.path.replace(/\\/g, '/');
        });
    }
    const { courseName, courseCode, instructorId } = req.body;
    const course = await Course.create({
        courseName,
        courseCode,
        instructorId,
        courseContent: courseContent
    });
    res.status(201).json({ course });
};

const updateCourse = async (req, res) => {
    let courseContent = req.body.courseContent;
    if(courseContent) {
        courseContent = JSON.parse(courseContent);
    }
    if(req.files && req.files.length > 0) {
        req.files.map((file, index) => {
            courseContent[index].fileUrl = file.path.replace(/\\/g, '/');
        });
    }
    const { courseName, courseCode, instructorId } = req.body;
    const course = await Course.findByIdAndUpdate(req.params.id, {
        courseName,
        courseCode,
        instructorId,
        courseContent: courseContent
    }, {new: true});
    res.status(200).json({ course });
};

const deleteCourse = async (req, res) => {
    const course = await Course.findByIdAndDelete(req.params.id);
    if(!course) {
       throw ApiError.notFound('Course not found');
    }
    res.status(200).json({ course });
};

module.exports = {getAllCourses, createCourse, updateCourse, deleteCourse};