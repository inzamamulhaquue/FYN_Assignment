const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');

router.post('/:vehicle_id/issues/add', issueController.addIssue);
router.get('/:vehicle_id/final-price', issueController.calculateFinalPrice);

module.exports = router;
