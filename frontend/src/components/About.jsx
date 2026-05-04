const About = () => {
  const differences = [
    { icon: "🧩", text: "All-in-one health platform" },
    { icon: "🚨", text: "Local disease outbreak alerts" },
    { icon: "⚡", text: "Simple and easy-to-use design" },
    { icon: "🔒", text: "Secure and private data handling" }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="About">
      {/* Background decorations */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-indigo-100 rounded-full blur-[80px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Intro & Mission */}
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">SehatSetu</span>
              </h1>
              <p className="text-[17px] text-slate-600 leading-relaxed">
                SehatSetu is a modern healthcare platform designed to simplify how people access and manage their health. From booking appointments to tracking records and receiving local disease alerts, everything is built to make healthcare easier, smarter, and more accessible.
              </p>
            </div>

            {/* Mission Statement Box */}
            <div className="relative p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-900/20 overflow-hidden transform transition-transform hover:-translate-y-1 duration-300">
              <div className="absolute top-2 right-4 opacity-10 text-9xl leading-none font-serif">"</div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-2xl shadow-inner">💡</span>
                  <h3 className="text-2xl font-bold tracking-wide">Our Mission</h3>
                </div>
                <p className="text-lg md:text-[19px] font-medium text-blue-50 leading-relaxed">
                  Our mission is to bridge the gap between people and healthcare by providing a simple, secure, and reliable digital solution.
                </p>
              </div>
              {/* Decorative circles inside mission box */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
            </div>
          </div>

          {/* Right Column: What Makes It Different */}
          <div className="relative">
            {/* Soft background shape behind the card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-indigo-100 rounded-[3rem] transform rotate-3 scale-105 -z-10 opacity-70"></div>
            
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-white/50">
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-3xl shadow-sm border border-amber-100">🌟</div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What Makes Us Different</h2>
              </div>
              
              <ul className="space-y-6">
                {differences.map((item, index) => (
                  <li key={index} className="flex items-center gap-5 group cursor-default">
                    <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-all duration-300 shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-[17px] font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About;