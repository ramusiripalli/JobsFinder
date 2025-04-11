import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postJob, resetJob } from "../features/jobs/jobSlice";
import { toast } from "react-toastify";

const PostJob = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    jobType: "",
    description: "",
    skills: "",
  });

  const { title, company, location, salary, jobType, description, skills } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postJob(formData))
      .unwrap()
      .then(() => {
        toast.success("Job Posted Successfully!");
        setFormData({
          title: "",
          company: "",
          location: "",
          salary: "",
          jobType: "",
          description: "",
          skills: "",
        });
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-12">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">📢 Post a New Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="title" placeholder="Job Title" value={title} onChange={handleChange} required className="input" />
            <input type="text" name="company" placeholder="Company" value={company} onChange={handleChange} required className="input" />
            <input type="text" name="location" placeholder="Location" value={location} onChange={handleChange} required className="input" />
            <input type="text" name="salary" placeholder="Salary (e.g. ₹8LPA)" value={salary} onChange={handleChange} className="input" />
            <input type="text" name="jobType" placeholder="Job Type (Remote/Onsite)" value={jobType} onChange={handleChange} required className="input" />
            <input type="text" name="skills" placeholder="Skills (comma separated)" value={skills} onChange={handleChange} required className="input" />
          </div>
          <textarea name="description" rows="5" placeholder="Job Description" value={description} onChange={handleChange} required className="input"></textarea>
          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-semibold text-lg transition duration-300">Post Job 🚀</button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
