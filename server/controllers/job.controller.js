const Job = require("../models/job.model");
const mongoose = require("mongoose");

// POST /api/jobs/create
const createJob = async (req, res) => {
  try {
    // Validate request body
    if (!req.body.title || !req.body.company || !req.body.location || 
        !req.body.type || !req.body.description || !req.body.jobLink || 
        !req.body.postedBy || !req.body.passouts || req.body.passouts.length === 0) {
      return res.status(400).json({ msg: "All required fields must be provided" });
    }

    // Create new job
    const job = new Job({ 
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      type: req.body.type,
      salary: req.body.salary || undefined,
      description: req.body.description,
      jobLink: req.body.jobLink,
      passouts: req.body.passouts,
      postedBy: req.body.postedBy,
      // Automatically sets createdAt
    });

    // Save to database
    await job.save();
    
    // Return success response with the created job
    res.status(201).json(job);
  } catch (error) {
    console.error("Error creating job:", error);
    
    // Handle validation errors
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ 
        msg: "Validation Error",
        errors: Object.values(error.errors).map(err => err.message)
      });
    }
    
    // Handle other errors
    res.status(500).json({ 
      msg: "Server error while creating job",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// GET /api/jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ 
      msg: "Server error while fetching jobs",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// PUT /api/jobs/:id
const updateJob = async (req, res) => {
  try {
    const updated = await Job.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    
    if (!updated) {
      return res.status(404).json({ msg: "Job not found" });
    }
    
    res.status(200).json(updated);
  } catch (error) {
    console.error("Error updating job:", error);
    
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ 
        msg: "Validation Error",
        errors: Object.values(error.errors).map(err => err.message)
      });
    }
    
    res.status(500).json({ 
      msg: "Server error while updating job",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// DELETE /api/jobs/:id
const deleteJob = async (req, res) => {
  try {
    const deleted = await Job.findByIdAndDelete(req.params.id);
    
    if (!deleted) {
      return res.status(404).json({ msg: "Job not found" });
    }
    
    res.status(200).json({ msg: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ 
      msg: "Server error while deleting job",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
};