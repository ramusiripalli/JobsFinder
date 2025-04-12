import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  type: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Internship'],
    required: true,
  },
  salary: { type: String },
  description: { type: String, required: true },
  jobLink: { type: String, required: true }, // job application link
  passouts: [{ type: Number, enum: [2019, 2020, 2021, 2022, 2023, 2024, 2025] }], // ✅ new field
  postedBy: { type: String, required: true }, // like Naukri, LinkedIn, etc.
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Job", jobSchema);
