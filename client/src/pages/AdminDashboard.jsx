import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, LayoutDashboard, LogOut, Users } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const menuItems = [ 
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/admin/dashboard" },
    { name: "Post a Job", icon: <Briefcase size={20} />, path: "/admin-job-form" },
  ];
  
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-80 bg-gradient-to-r from-orange-900 via-white to-green-900 p-6 space-y-10 shadow-2xl border-r border-cyan-400">
        <h1 className="text-3xl font-bold text-black tracking-wide">UdyogaSetu 👑</h1>

        <nav className="flex flex-col gap-4">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => navigate(item.path)}
              className="flex items-center gap-3 text-left px-4 py-2 rounded-lg hover:shadow-lg transition-all"
            >
              {item.icon}
              <span className="text-xl text-black">{item.name}</span>
            </button>
          ))}
        </nav>

        <button
          className="flex items-center gap-2 text-black hover:text-cyan-500 text-xl mt-12 ml-4"
          onClick={() => navigate("/login")}
        >
          <LogOut size={35} /> Logout
        </button>
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="w-full px-8 py-4 border-b border-cyan-400 backdrop-blur-lg bg-black flex justify-center items-center">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff00c3] mb-6">Admin Dashboard</h2>
          
        </header>

        {/* Main Content */}
        <motion.main
          className="flex-1 p-10 overflow-y-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <section className="mb-10">
            <h3 className="text-4xl font-bold text-cyan-400 mb-2">Hello!</h3>
            <p className="text-gray-400">Monitor and manage platform activity.</p>
          </section>

          {/* Dashboard Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Jobs Posted", value: 0 },
              { title: "Applicants", value: 0 },
              { title: "Pending Reviews", value: 0 },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-black backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-700"
              >
                <h4 className="text-xl text-cyan-300 font-semibold mb-2">{card.title}</h4>
                <p className="text-4xl font-bold text-white">{card.value}</p>
              </div>
            ))}
          </section>
        </motion.main>
      </div>
    </div>
  );
};

export default AdminDashboard;
