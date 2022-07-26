const express = require('express');
const gradeController = require('../controllers/gradeController');

const router = express.Router();

router.post('/', gradeController.create);
router.get('/', gradeController.get);

module.exports = router;
