const express = require('express');
const upload = require('../utils/multer');
const {getAllCourses, createCourse, updateCourse, deleteCourse, getCourse} = require('../controllers/course');
const { authMiddleware } = require('../middleware');

const router = express.Router();

router.route('/').get(getAllCourses).post(authMiddleware ,upload.array('courseFiles'), createCourse);
router.route('/:id').patch(upload.array('courseFiles'), updateCourse).delete(deleteCourse);
router.route('/:id').get(getCourse);


module.exports = router;