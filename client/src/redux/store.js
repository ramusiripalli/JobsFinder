import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";
import jobsReducer from "./jobs/jobsSlice.js"; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobsReducer
  },
});

export default store;