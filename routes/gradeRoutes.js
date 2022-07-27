const express = require('express');
const gradeController = require('../controllers/gradeController');

const router = express.Router();

router.get('/', gradeController.getGrades);
router.post('/', gradeController.createNewGrade);

module.exports = router;
