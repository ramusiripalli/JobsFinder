import React from "react";
import { FaHome, FaBriefcase, FaBell, FaUser } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-[#0a0a23] to-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f0f1fdd] border-r border-[#1f1f3f] shadow-md backdrop-blur-lg hidden md:block">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff00c3]">
            UdyogaSetu
          </h1>
        </div>
        <nav className="mt-10 space-y-4 px-4">
          <SidebarItem icon={<FaHome />} text="Home" />
          <SidebarItem icon={<FaBriefcase />} text="My Applications" />
          <SidebarItem icon={<FaBell />} text="Notifications" />
          <SidebarItem icon={<FaUser />} text="Profile" />
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Topbar */}
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            👋 Welcome Back, <span className="text-[#00f0ff]">Candidate</span>
          </h2>
          <button className="bg-gradient-to-r from-[#00f0ff] to-[#ff00c3] px-4 py-2 rounded-md text-white shadow-md hover:scale-105 transition">
            Logout
          </button>
        </header>

        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard
            title="New Job Matches"
            value="12"
            gradient="from-[#00f0ff] to-[#00ffa3]"
          />
          <InfoCard
            title="Applications Sent"
            value="23"
            gradient="from-[#ff00c3] to-[#ff6b6b]"
          />
          <InfoCard
            title="Profile Views"
            value="58"
            gradient="from-[#a78bfa] to-[#60a5fa]"
          />
        </section>

        {/* Latest Jobs */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold mb-4 border-b border-[#2f2f4f] pb-2">
            🔥 Latest Job Openings
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {["Frontend Developer", "Backend Developer", "Data Analyst", "UI/UX Designer"].map((title, idx) => (
              <JobCard key={idx} title={title} company="TechVerse" location="Remote" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-gray-300 hover:text-[#00f0ff] transition cursor-pointer">
    <span className="text-lg">{icon}</span>
    <span>{text}</span>
  </div>
);

const InfoCard = ({ title, value, gradient }) => (
  <div
    className={`p-6 rounded-xl bg-[#0f0f1f] border border-[#1f1f3f] shadow-md backdrop-blur-md hover:shadow-lg transition`}
  >
    <h4 className="text-md text-gray-300 mb-2">{title}</h4>
    <p
      className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}
    >
      {value}
    </p>
  </div>
);

const JobCard = ({ title, company, location }) => (
  <div className="bg-[#0f0f1fdd] border border-[#1f1f3f] p-5 rounded-xl shadow hover:scale-[1.02] transition-all backdrop-blur-sm">
    <h4 className="text-lg font-semibold text-white">{title}</h4>
    <p className="text-sm text-gray-400">{company} • {location}</p>
    <button className="mt-4 bg-gradient-to-r from-[#00f0ff] to-[#ff00c3] px-4 py-2 rounded-md text-white font-semibold hover:opacity-90 transition">
      Apply Now
    </button>
  </div>
);

export default Dashboard;
