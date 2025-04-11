const express = require('express');
const router = express.Router();
const { postJob, getAllJobs } = require('../controllers/job.controller.js');
const { protect } = require('../middleware/auth.middleware.js');

router.post('/post', protect, postJob);
router.get('/', getAllJobs);

module.exports = router;
