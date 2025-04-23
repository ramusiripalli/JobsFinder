const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes.js");
const jobRoutes = require("./routes/job.routes.js");
const connectDB = require("./config/db.js");
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


