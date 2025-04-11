import axios from 'axios';

const postJob = async (jobData, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const res = await axios.post('/api/jobs/post', jobData, config);
  return res.data;
};

export default { postJob };
