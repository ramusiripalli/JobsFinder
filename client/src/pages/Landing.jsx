import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Background Glow Effects */}
      
      <div className="absolute top-[50%] left-[40%] w-[400px] h-[200px] bg-gradient-to-br from-pink-400 to-cyan-600 opacity-40 blur-3xl rounded-full animate-spin" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[200px] h-[300px] bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-40 blur-3xl rounded-full animate-pulse" />

      {/* Navbar */}
      <nav className="z-10 relative flex justify-between items-center px-8 py-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
        UdyogaSetu
        </h1>
        <div className="space-x-6 text-sm">
          <Link to="/" className="hover:text-cyan-400 transition-all text-xl">Home</Link>
          <Link to="/login" className="hover:text-cyan-400 transition-all text-xl">Login</Link>
          <Link to="/register" className="hover:text-cyan-400 transition-all text-xl">Register</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="z-10 relative px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        {/* Left Side */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight text-white">
            Find Your <span className="text-cyan-400">Dream Job</span><br />
            In Just A Few Clicks
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Smart matches, verified companies, and a stunning experience. Your future starts here.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/login"
              className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-black shadow-lg hover:scale-105 transition transform duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-pink-600 to-purple-500 hover:from-purple-500 hover:to-pink-400 text-white shadow-lg hover:scale-105 transition transform duration-300"
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2">
    <div className="w-full max-w-md p-8 rounded-xl backdrop-blur-lg bg-black border border-cyan-400 shadow-[0_0_100px_#00ffff22]">
      <h3 className="text-2xl font-semibold text-cyan-300 text-center">
        Daily Job Openings
      </h3>
      <p className="text-gray-300 text-center mt-4">
        Stay updated with fresh job postings every day. Opportunities from startups, MNCs, and remote work — all in one place.
      </p>
    </div>
  </div>
      </section>

      {/* Features Section */}
      <section className="z-10 relative px-8 py-20 bg-gradient-to-t from-black via-gray-900 to-black">
        
        <h3 className="text-3xl text-center font-bold mb-12">
          Why Choose <span className="text-cyan-400">UdyogaSetu?</span>
        </h3>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            { title: "Smart AI Matching", desc: "Find jobs that match your skills & goals automatically." },
            { title: "Verified Companies", desc: "No spam. Only genuine opportunities from top firms." },
            { title: "Blazing Fast", desc: "Apply with one click. Track offers instantly." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black border border-cyan-400 p-6 rounded-2xl shadow-xl hover:shadow-cyan-500/80 transition-all"
            >
              <h4 className="text-xl font-semibold text-cyan-300 mb-2">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 py-20 text-center bg-black">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Begin Your Journey with <span className="text-cyan-400">UdyogaSetu</span>
        </h2>
        <p className="text-gray-400 mb-6">
          Discover top jobs. Get hired. Live your dream.
        </p>
        <Link
          to="/register"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-black font-semibold px-8 py-3 rounded-full transition-all shadow-lg hover:scale-105"
        >
          Join Now
        </Link>
      </section>
    </div>
  );
};

export default Landing;
