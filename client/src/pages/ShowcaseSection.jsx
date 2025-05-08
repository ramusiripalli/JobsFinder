import React from "react";

const showcaseText = [
  "LinkedIn Jobs",
  "Naukri Listings",
  "Indeed Alerts",
  "Hirect Hiring",
  "Wellfound (AngelList)",
  "Y Combinator Startups",
  "Instahyre",
  "MAANG Openings",
  "Internshala",
  "FreshersWorld",
  "CutShort.io",
  "Toptal / Fiverr / Upwork"
];

const ShowcaseSection = () => {
  return (
    <section className="bg-black py-16 px-4 text-white relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 text-cyan-400 tracking-wide">
          One Platform. All Opportunities.
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          All job portal listings, one place. No more switching tabs, get updates from top hiring platforms right here.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {showcaseText.map((text, index) => (
          <div
            key={index}
            className="group relative transform -rotate-[0deg] hover:rotate-2 transition-all duration-300"
          >
            <div className="bg-[#0f172a] border border-cyan-500 rounded-xl px-3 py-6 flex items-center justify-center h-28 shadow-md group-hover:shadow-[0_10px_25px_rgba(0,255,255,0.3)] group-hover:border-white transition-all duration-300">
              <h3 className="text-white font-semibold text-center text-lg typewriter">  
                {text}
              </h3>
            </div>
            <div className="absolute -top-2 left-3 w-5 h-5 bg-white rotate-45 shadow-md group-hover:bg-white transition animate-pulse-slow" />
          </div>
        ))}
      </div>

      <style>{`
  .typewriter {
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid cyan;
    animation: typing 6s steps(20) infinite, blink 1s step-end infinite;
  }

  @keyframes typing {
    0% { width: 0 }
    40% { width: 100% }
    60% { width: 100% }
    100% { width: 0 }
  }

  @keyframes blink {
    0%, 100% { border-color: transparent }
    50% { border-color: white }
  }

  /* 👇 NEW pulse animation 👇 */
  @keyframes pulseSlow {
    0%, 100% {
      transform: scale(1) rotate(45deg);
    }
    50% {
      transform: scale(1.2) rotate(135deg);
    }
  }

  .animate-pulse-slow {
    animation: pulseSlow 3s ease-in-out infinite;
  }
`}</style>
    </section>
  );
};

export default ShowcaseSection;
