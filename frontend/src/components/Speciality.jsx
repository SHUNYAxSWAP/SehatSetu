const specialityData = [
    {
        id: 1,
        title: "All-in-One Platform",
        description: "Manage appointments, medicines, and records in one unified, seamless place.",
        icon: "🩺",
        color: "blue"
    },
    {
        id: 2,
        title: "Simple & Easy to Use",
        description: "A clean, intuitive interface specifically designed to be accessible for all age groups.",
        icon: "⚡",
        color: "amber"
    },
    {
        id: 3,
        title: "Outbreak Alerts",
        description: "Get real-time alerts about diseases spreading in your area so you can stay informed and take preventive measures early.",
        icon: "🦠",
        color: "teal"
    },
    {
        id: 4,
        title: "Secure & Private",
        description: "Your health data is strictly protected with state-of-the-art encryption and privacy controls.",
        icon: "🔒",
        color: "indigo"
    }
];

const colorStyles = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    amber: "bg-amber-50 text-amber-500 border-amber-100",
    teal: "bg-teal-50 text-teal-600 border-teal-100",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100"
};

const Speciality = () => {
    return (
        <section className="py-24 bg-[#FAFCFF] border-t border-slate-100" id="Specialties">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Heading & Text */}
                    <div className="max-w-lg">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6">
                            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">SehatSetu?</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We designed SehatSetu to simplify your healthcare journey. With trust, convenience, and absolute security at its core, managing your health has never been easier.
                        </p>
                        <button className="bg-white text-slate-900 border border-slate-200 px-8 py-3.5 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-sm">
                            Learn More About Us
                        </button>
                    </div>

                    {/* Right Column: Features List */}
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                        {specialityData.map((item) => (
                            <div key={item.id} className="group flex flex-col gap-4">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${colorStyles[item.color]}`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-[15px]">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Speciality;