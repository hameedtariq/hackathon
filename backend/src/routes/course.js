const express = require('express');
const upload = require('../utils/multer');
const {getAllCourses, createCourse, updateCourse, deleteCourse} = require('../controllers/course');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(getAllCourses).post(authMiddleware, upload.array('courseFiles'), createCourse);
router.route('/:id').patch(upload.array('courseFiles'), updateCourse).delete(deleteCourse);


module.exports = router;