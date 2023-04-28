const Assignment = require('../models/Assignment');
const Course = require('../models/Course');
const ApiError = require('../utils/ApiError');
const Student = require('../models/Student')


const getAllAssignments = async (req, res) => {
    const assignments = await Assignment.find({}).populate('courseId');
    res.status(200).json({ assignments });
};

const createAssignment = async (req, res) => {
    const { courseId } = req.params;
    const course = Course.findById(courseId);
    if(!course) {
        throw ApiError.badRequest('Course not found');
    }
    let path;
    if(req.file) {
        path = req.file.path.replace(/\\/g, '/');
    }
    const { title, description, deadline } = req.body;
    const assignment = await Assignment.create({
        title,
        description,
        courseId,
        fileUrl: path,
        deadline: new Date(deadline)
    });
    res.status(201).json({ assignment });
};

const submitAssignment = async (req, res) => {
    if(!req.file){
        throw ApiError.badRequest("Please upload assignment file.");
    }
    const { assignmentId } = req.params;
    const {id, role} = req.user;
    if(role !== 'student'){
        throw ApiError.badRequest("You are not allowed to submit this assignment.")
    }
    const assignment =  Assignment.findById(assignmentId);
    if(!assignment) {
        throw ApiError.badRequest('Assignment not found');
    }
    const alreadySubmitted = assignment.submissions.find(submission => submission.studentId === id);
    if(alreadySubmitted) {
        throw ApiError.badRequest('You have already submitted this assignment');
    }    
    if(assignment.deadline.getTime() < new Date().getTime()) {
        throw ApiError.badRequest('Deadline has passed');
    }
    assignment.submissions.push({
        studentId: id,
        fileUrl: req.file.path.replace(/\\/g, '/')
    });
    await assignment.save();
    res.status(201).json({ assignment });
};


module.exports = {
    getAllAssignments,
    createAssignment,
    submitAssignment
};