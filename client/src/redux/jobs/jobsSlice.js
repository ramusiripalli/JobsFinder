import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunk to fetch all jobs
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/jobs`);
  if (!res.ok) throw new Error("Failed to fetch jobs");
  return await res.json();
});

// Async Thunk to create a new job
export const createJob = createAsyncThunk(
  "jobs/createJob",
  async ({ jobData, token }, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/api/jobs/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(jobData)
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.msg || "Failed to create job");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    loading: false,
    error: null,
    createJobStatus: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  },
  reducers: {
    resetCreateJobStatus: (state) => {
      state.createJobStatus = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // fetchJobs
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // createJob
      .addCase(createJob.pending, (state) => {
        state.createJobStatus = 'loading';
        state.error = null;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.createJobStatus = 'succeeded';
        state.jobs.push(action.payload); // optional: if you want to immediately update the job list
      })
      .addCase(createJob.rejected, (state, action) => {
        state.createJobStatus = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetCreateJobStatus } = jobsSlice.actions;
export default jobsSlice.reducer;
