const express = require('express');
const subjectController = require('../controllers/subjectController');

const router = express.Router();

router.post('/', subjectController.create);
router.get('/', subjectController.get);
router.put('/:id', subjectController.update);


module.exports = router;
