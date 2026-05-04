const featuresData = [
  {
    id: 1,
    title: "Consultation",
    description: "Book appointments with verified doctors anytime, from anywhere.",
    icon: "🩺",
    color: "blue"
  },
  {
    id: 2,
    title: "Medicine Management",
    description: "Track medicines effortlessly and get timely reminders.",
    icon: "💊",
    color: "green"
  },
  {
    id: 3,
    title: "Health Records",
    description: "Securely store and access your medical reports anytime.",
    icon: "📊",
    color: "indigo"
  },
  {
    id: 4,
    title: "Emergency Support",
    description: "Quick access to ambulance and emergency contacts.",
    icon: "🚑",
    color: "rose"
  }
];

const colorStyles = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "group-hover:border-blue-200",
    shadow: "group-hover:shadow-blue-500/10"
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "group-hover:border-green-200",
    shadow: "group-hover:shadow-green-500/10"
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "group-hover:border-indigo-200",
    shadow: "group-hover:shadow-indigo-500/10"
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "group-hover:border-rose-200",
    shadow: "group-hover:shadow-rose-500/10"
  }
};

const Features = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="Features" >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6">
                        Everything You Need to <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Manage Your Health</span>
                    </h1>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuresData.map((feature) => {
                        const style = colorStyles[feature.color];
                        return (
                            <div 
                                key={feature.id} 
                                className={`group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${style.shadow} ${style.border} relative overflow-hidden`}
                            >
                                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${style.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}></div>
                                
                                <div className={`w-14 h-14 rounded-2xl ${style.bg} ${style.text} flex items-center justify-center text-2xl mb-6 shadow-sm relative z-10`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed relative z-10">
                                    {feature.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Features;