import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your login logic
    toast.success("Logged in successfully 🎉");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0a23] to-black flex items-center justify-center px-4">
      <Toaster position="top-center" />
      <div className="absolute top-[40%] left-[-5%] w-[50px] h-[400px] bg-cyan-400 blur-3xl rounded-full animate-bounce" />
      <div className="w-full max-w-md bg-[#0f0f1fdd] border border-[#00f0ff33] rounded-2xl p-8 shadow-xl backdrop-blur-md animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff00c3] mb-6">
          Login to UdyogaSetu
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-cyan-500/70 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
          </div>

          <div className="relative">
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-cyan-500/70 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
            <span
              className="absolute right-4 top-9 text-gray-400 cursor-pointer text-2xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#00f0ff] to-[#ff00c3] text-white py-2 rounded-md font-semibold hover:opacity-90 transition-all duration-200 shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-400">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#00f0ff] hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
