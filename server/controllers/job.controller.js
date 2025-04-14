const Job = require("../models/job.model");
const mongoose = require("mongoose");

// POST /api/jobs/create
const createJob = async (req, res) => {
  try {
    const job = new Job({ ...req.body });
    await job.save();
    res.status(201).json({ msg: "Job created successfully", job });
  } catch (error) {
    res.status(500).json({ msg: "Error creating job", error });
  }
};

// GET /api/jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching jobs", error });
  }
};

// PUT /api/jobs/:id
const updateJob = async (req, res) => {
  try {
    const updated = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ msg: "Job not found" });
    res.status(200).json({ msg: "Job updated", updated });
  } catch (error) {
    res.status(500).json({ msg: "Error updating job", error });
  }
};

// DELETE /api/jobs/:id
const deleteJob = async (req, res) => {
  try {
    const deleted = await Job.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ msg: "Job not found" });
    res.status(200).json({ msg: "Job deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Error deleting job", error });
  }
};

// Export all functions
module.exports = {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
};
