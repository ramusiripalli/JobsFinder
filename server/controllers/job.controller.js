import Job from "../models/job.model.js";
import mongoose from "mongoose";

// POST /api/jobs/create
export const createJob = async (req, res) => {
  try {
    const job = new Job({ ...req.body });
    await job.save();
    res.status(201).json({ msg: "Job created successfully", job });
  } catch (error) {
    res.status(500).json({ msg: "Error creating job", error });
  }
};

// GET /api/jobs
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching jobs", error });
  }
};

// PUT /api/jobs/update/:id
export const updateJob = async (req, res) => {
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

// DELETE /api/jobs/delete/:id
export const deleteJob = async (req, res) => {
  try {
    const deleted = await Job.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ msg: "Job not found" });
    res.status(200).json({ msg: "Job deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Error deleting job", error });
  }
};
