const express = require("express");
const router = express.Router();

const {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
} = require("../controllers/job.controller.js");

const { verifyToken, isAdmin } = require("../middleware/auth.middleware.js");


// Only admin can create, update, delete jobs
router.post("/create", verifyToken, isAdmin, createJob);
router.put("/update/:id", verifyToken, isAdmin, updateJob);
router.delete("/delete/:id", verifyToken, isAdmin, deleteJob);

// All users can view jobs
router.get("/", getAllJobs);

module.exports = router;
