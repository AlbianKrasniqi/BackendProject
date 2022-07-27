const express = require('express');
const gradeController = require('../controllers/gradeController');

const router = express.Router();

router
  .route('/')
  .get(gradeController.getAllGrades)
  .post(gradeController.createGrade);

router
  .route('/:id')
  .get(gradeController.getGrade)
  .put(gradeController.updateGrade)
  .delete(gradeController.deleteGrade);

module.exports = router;
