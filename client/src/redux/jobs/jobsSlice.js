import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunk to fetch all jobs
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/jobs`);
  if (!res.ok) throw new Error("Failed to fetch jobs");
  return await res.json();
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobs = action.payload;
        state.loading = false;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default jobsSlice.reducer;
