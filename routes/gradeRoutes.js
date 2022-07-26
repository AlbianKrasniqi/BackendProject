const express = require('express');
const gradeController = require('../controllers/gradeController');

const router = express.Router();

router.post('/', gradeController.createNewGrade);

module.exports = router;
