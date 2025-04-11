import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postJob } from '../features/jobs/jobSlice';
import { toast } from 'react-toastify';

const JobForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    title: '', company: '', location: '', salary: '', description: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postJob({ ...formData }, user.token));
    toast.success('Job Posted Successfully!');
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-black text-white rounded-xl shadow-xl mt-10">
      <h2 className="text-2xl mb-4 text-center font-bold">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['title', 'company', 'location', 'salary'].map((field) => (
          <input key={field} name={field} onChange={handleChange} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} className="w-full p-2 rounded bg-gray-800 text-white" required />
        ))}
        <textarea name="description" onChange={handleChange} placeholder="Job Description" className="w-full p-2 rounded bg-gray-800 text-white" required></textarea>
        <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded">Post Job</button>
      </form>
    </div>
  );
};

export default JobForm;
