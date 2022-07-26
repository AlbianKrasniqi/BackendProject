const express = require('express');
const subjectController = require('../controllers/subjectController');

const router = express.Router();

router.post('/', subjectController.createNewSubject);

module.exports = router;
