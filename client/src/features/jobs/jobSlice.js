import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jobService from '../../services/jobService';

export const postJob = createAsyncThunk('jobs/post', jobService.postJob);

const jobSlice = createSlice({
  name: 'jobs',
  initialState: { jobs: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postJob.pending, (state) => {
        state.loading = true;
      })
      .addCase(postJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs.push(action.payload);
      })
      .addCase(postJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default jobSlice.reducer;
