const express = require('express');
const {getAllAssignments, createAssignment, submitAssignment, gradeAssignment} = require('../controllers/assignment');
const router = express.Router();
const upload = require('../utils/multer');
const authMiddleware = require('../middleware/authMiddleware');

router.route('/').get(authMiddleware, getAllAssignments)
router.route('/:courseId').post(upload.single('assignmentFile'), authMiddleware, createAssignment);
router.route('/:assignmentId/submit').post(upload.single('assignmentFile'),authMiddleware, submitAssignment);
router.route('/:assignmentId/grade/:studentId').post(upload.single('assignmentFile'),authMiddleware, gradeAssignment);


module.exports = router;