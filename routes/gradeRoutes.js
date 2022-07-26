const express = require('express');
const gradeController = require('../controllers/gradeController');

const router = express.Router();

router.get('/', gradeController.index);

module.exports = router;
