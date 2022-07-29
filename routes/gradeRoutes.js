const express = require('express');
const gradeController = require('../controllers/gradeController');
const authController = require('../controllers/authController');
const router = express.Router();

router.use(authController.protect);

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
