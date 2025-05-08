import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      return toast.error('Please fill all fields!');
    }

    if (password !== confirmPassword) {
      return toast.error('Passwords do not match!');
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();
      if (res.ok) {
        toast.success('Registered successfully!');
        navigate('/login');
      } else {
        toast.error(data.message || 'Registration failed!');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col justify-center items-center px-4 relative">
      <Toaster position="top-center" toastOptions={{
    style: {
      fontSize: '20px',
      padding: '16px 24px',
      minWidth: '450px',
    },
  }} />
    

      {/* Home Page Button - Outside Card */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 text-lg bg-gradient-to-l from-[#00f0ff] to-[#ff00c3] text-white px-4 py-1 rounded-md hover:shadow-pink-400 transition duration-300 shadow-md"
      >
        ← Go to Home Page
      </button>

      <div className="max-w-md w-full bg-[#0f0f1fdd] rounded-2xl shadow-lg shadow-cyan-400/80 border border-cyan-600/60 p-8 mt-10">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create your <span className="text-cyan-400">UdyogaSetu</span> Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-3 bg-transparent border border-cyan-500/70 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-transparent border border-cyan-500/70 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            onChange={handleChange}
          />

          {/* <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-cyan-500/70 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          >
            <option value="">Select Role</option>
            <option value="recruiter">Recruiter</option>
            <option value="jobseeker">Job Seeker</option>
          </select> */}

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 pr-10 bg-transparent border border-cyan-500/70 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              onChange={handleChange}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3.5 text-xl text-white cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 pr-10 bg-transparent border border-cyan-500/70 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              onChange={handleChange}
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3.5 text-xl text-white cursor-pointer"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-l from-[#00f0ff] to-[#ff00c3] text-white py-2 font-bold rounded-md hover:shadow-pink-500 transition-all duration-300 shadow-md"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-200 mt-5">
          Already have an account?{'   '}
          <Link to="/login" className="text-cyan-400 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
