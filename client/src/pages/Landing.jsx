import { Link } from "react-router-dom";
import ShowcaseSection from "./ShowcaseSection.jsx";
import { motion } from "framer-motion";

const Landing = () => {
  return ( 
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-[34%] left-[40%] w-[400px] h-[240px] bg-gradient-to-br from-pink-400 to-cyan-400 opacity-40 blur-3xl rounded-full animate-spin" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[200px] h-[300px] bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-40 blur-3xl rounded-full animate-pulse" />
      <div className="absolute top-[10%] right-[20%] w-[150px] h-[150px] bg-gradient-to-tl from-purple-500 to-cyan-400 opacity-30 blur-3xl rounded-full animate-pulse" />

      {/* Navbar */}
      <motion.nav 
        className="z-10 relative flex justify-between items-center px-8 py-6 backdrop-blur-sm bg-black/30 border-b border-cyan-500/20"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#ff00c3] text-transparent bg-clip-text">
          UdyogaSetu
        </h1>
        <div className="space-x-8 text-sm">
          <Link to="/" className="hover:text-cyan-400 transition-all text-xl relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/login" className="hover:text-cyan-400 transition-all text-xl relative group">
            Login
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/register" className="hover:text-cyan-400 transition-all text-xl relative group">
            Register
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="z-10 relative px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        {/* Left Side */}
        <motion.div 
          className="md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-5xl font-extrabold mb-6 leading-tight text-white">
            All Jobs. <span className="text-cyan-400">One Platform.</span><br />
            <span className="relative">
              Hassle-Free Job Discovery
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 5 C 50 0, 150 0, 200 5" stroke="#00f0ff" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            UdyogaSetu brings together job openings from various platforms and companies, all in one place. No more switching tabs or endless searching. Just apply, track, and grow.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/login"
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-black shadow-lg hover:scale-105 transition transform duration-300 flex items-center justify-center"
            >
              <span>Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-pink-600 to-purple-500 hover:from-purple-500 hover:to-pink-400 text-white shadow-lg hover:scale-105 transition transform duration-300"
            >
              Create Account
            </Link>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div 
          className="md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="w-full max-w-md p-8 rounded-xl backdrop-blur-lg bg-black/40 border border-cyan-400/70 shadow-[0_0_100px_#00ffff22] relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl"></div>
            <h3 className="text-2xl font-semibold text-cyan-300 text-center relative">
              All Platform Job Notifications
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></span>
            </h3>
            <p className="text-gray-300 text-center mt-6 leading-relaxed">
              Receive instant Telegram alerts when a job is posted. Whether it's from LinkedIn, Naukri, Internshala or startup portals — we've got you covered.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="flex items-center space-x-2 text-cyan-300 bg-cyan-900/30 px-4 py-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Real-time updates</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="z-10 relative px-8 py-20 bg-gradient-to-t from-black via-gray-900 to-black">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl text-center font-bold mb-4">
            Why Choose <span className="text-cyan-400">UdyogaSetu?</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto mb-12 rounded-full"></div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                title: "Unified Job Listing",
                desc: "Find jobs from multiple platforms, all under one roof — save time and effort.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                ),
                title: "Telegram Notifications",
                desc: "Get real-time updates for new jobs. Never miss an opportunity again.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                ),
                title: "Filter & Apply Fast",
                desc: "Use advanced filters to discover jobs that truly fit you. Apply instantly.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#0f172a] border border-cyan-400/50 p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/30 transition-all group hover:-translate-y-2 duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-cyan-300 mb-3 group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Showcase of all the platforms and their job listings */}
      <ShowcaseSection />

      <motion.section 
        className="px-8 py-20 text-center bg-black relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      > 
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[20%] left-[10%] w-[100px] h-[100px] bg-gradient-to-br from-cyan-500 to-blue-500 opacity-20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-[30%] right-[15%] w-[150px] h-[150px] bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 blur-3xl rounded-full"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex justify-center space-x-4 mb-6">
            <span className="text-3xl">🔗</span>
            <span className="text-3xl">🧩</span>
            <span className="text-3xl">📶</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-4 text-white">
            All Jobs. One Setu. <span className="text-cyan-400">UdyogaSetu</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            No more endless searches. One place for all job updates — startups, MNCs, remote, internships, and more.
          </p>
          <Link
            to="/register"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-black font-semibold px-10 py-4 rounded-full transition-all shadow-lg hover:scale-105 inline-flex items-center"
          >
            <span>Join Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </motion.section>
      
      <footer className="bg-[#0f0f1f] text-center py-6 border-t border-cyan-900/30">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} UdyogaSetu. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;