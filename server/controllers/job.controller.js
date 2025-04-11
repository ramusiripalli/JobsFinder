const asyncHandler = require('express-async-handler');
const Job = require('../models/job.model.js');

const createJob = asyncHandler(async (req, res) => {
  const { title, company, location, salary, jobType, description, skills } = req.body;

  if (!title || !company || !location || !jobType || !skills || !description) {
    res.status(400);
    throw new Error('All required fields must be filled');
  }

  const job = await Job.create({
    user: req.user.id,
    title,
    company,
    location,
    salary,
    jobType,
    description,
    skills,
  });

  res.status(201).json(job);
});

module.exports = { createJob };
