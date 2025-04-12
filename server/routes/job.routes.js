import express from "express";
import {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
} from "../controllers/job.controller.js";
import { verifyToken, isAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

// Only admin can create, update, delete jobs
router.post("/create", verifyToken, isAdmin, createJob);
router.put("/update/:id", verifyToken, isAdmin, updateJob);
router.delete("/delete/:id", verifyToken, isAdmin, deleteJob);

// All users can view jobs
router.get("/", getAllJobs);

export default router;
