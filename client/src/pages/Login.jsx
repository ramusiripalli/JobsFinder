import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: form.email,
        password: form.password,
      });

      toast.success("Login successful! 🚀");
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.msg || "Login failed!");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-blue-200 overflow-hidden px-4">

      {/* Background animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-400 to-transparent animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-purple-300 to-transparent animate-pulse" />
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="z-10 bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700">Welcome Back</h2>

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input"
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="input pr-12"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-3 right-3 cursor-pointer text-gray-500"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </span>
        </div>

        <button type="submit" className="btn w-full text-lg tracking-wide">
          Login
        </button>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline font-semibold">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
