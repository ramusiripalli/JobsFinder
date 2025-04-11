const express = require('express');
const router = express.Router();
const { createJob } = require('../controllers/job.controller.js');
const { protect } = require('../middleware/auth.middleware.js');

router.post('/', protect, createJob);

module.exports = router;
