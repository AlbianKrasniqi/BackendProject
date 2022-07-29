const express = require('express');
const subjectController = require('../controllers/subjectController');
const authController = require('../controllers/authController');
const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(subjectController.getAllSubjects)
  .post(subjectController.createSubject);

router
  .route('/:id')
  .get(subjectController.getSubject)
  .put(subjectController.updateSubject)
  .delete(subjectController.deleteSubject);

module.exports = router;
