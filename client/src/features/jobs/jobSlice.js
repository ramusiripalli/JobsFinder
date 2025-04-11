import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jobService from "./jobService";

const initialState = {
  jobs: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const postJob = createAsyncThunk("jobs/post", async (jobData, thunkAPI) => {
  try {
    return await jobService.postJob(jobData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    resetJob: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(postJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetJob } = jobSlice.actions;
export default jobSlice.reducer;
