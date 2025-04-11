const Job = require('../models/job.model.js');

const postJob = async (req, res) => {
  try {
    const { title, company, location, salary, description } = req.body;
    const job = new Job({
      title, company, location, salary, description,
      recruiter: req.user._id
    });
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find().populate('recruiter', 'name email');
  res.json(jobs);
};

module.exports = { postJob, getAllJobs };
