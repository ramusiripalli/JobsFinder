import axios from "axios";

const API_URL = "/api/jobs";

const postJob = async (jobData) => {
  const token = JSON.parse(localStorage.getItem("user")).token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, jobData, config);
  return response.data;
};

const jobService = { postJob };
export default jobService;
