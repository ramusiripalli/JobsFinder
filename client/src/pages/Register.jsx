import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/register", form);
    alert(res.data.msg);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <input className="input" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="input" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input className="input" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button type="submit" className="btn mt-4 w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;
