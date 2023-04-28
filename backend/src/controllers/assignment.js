const Course = require('../models/Course');
const ApiError = require('../utils/ApiError');
const Student = require('../models/Student');
const Assignment = require('../models/Assignment');
const Instructor = require('../models/Instructor');


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
    const {id} = req.user;
    const student = await Student.findById(id);
    if(!student) {
        throw ApiError.badRequest('Student not found');
    }
    const assignment = await Assignment.findById(assignmentId);
    if(!assignment) {
        throw ApiError.badRequest('Assignment not found');
    }
    const alreadySubmitted = assignment.submissions?.find(submission => submission.studentId === id);
    if(alreadySubmitted) {
        throw ApiError.badRequest('You have already submitted this assignment');
    }    
    // console.log(assignment.json());
    console.log(assignment.title);
    if(assignment.deadline.getTime() < new Date().getTime()) {
        throw ApiError.badRequest('Deadline has passed');
    }
    if(!assignment.submissions){
        assignment.submissions = [];
    }
    assignment.submissions.push({
        studentId: id,
        fileUrl: req.file.path.replace(/\\/g, '/')
    });
    await assignment.save();
    res.status(201).json({ assignment });
};

const gradeAssignment = async (req, res) => {
    const { assignmentId,studentId } = req.params;
    const {id} = req.user;
    const { grade, feedback} = req.body;
    const assignment = await Assignment.findById(assignmentId);
    if(!assignment) {
        throw ApiError.badRequest('Assignment not found');
    }
    // const instructor = await Instructor.findById(id);
    // if(!instructor) {
    //     throw ApiError.badRequest('Instructor not found');
    // }
    console.log(studentId);
    let index = -1;
    console.log(assignment.submissions)
    assignment.submissions.forEach((submission, idx) => {
        if(submission.studentId == studentId) {
            index = idx;
        }
    });
    if( index === -1) {
        throw ApiError.badRequest('Student has not submitted this assignment');
    }
    assignment.submissions[index].grade = grade;
    assignment.submissions[index].feedback = feedback;
    assignment.submissions[index].evaluated = true;
    await assignment.save();
    res.status(200).json({ assignment });
}




module.exports = {
    getAllAssignments,
    createAssignment,
    submitAssignment,
    gradeAssignment
};