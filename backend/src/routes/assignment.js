const express = require('express');
const {getAllAssignments, createAssignment, submitAssignment} = require('../controllers/assignment');
const router = express.Router();
const upload = require('../utils/multer');

router.route('/').get(getAllAssignments)
router.route('/:courseId').post(upload.single('assignmentFile'), createAssignment);
router.route('/:assignmentId/submit').post(upload.single('assignmentFile'), submitAssignment);


module.exports = router;