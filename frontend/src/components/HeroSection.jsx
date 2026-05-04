import HeroImg from "../assets/heroSec.png"

const HeroSection = () => {
    return (
        <section className='relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden bg-[#FAFCFF]'>
            {/* Background Decorative Elements */}
            <div className='absolute top-20 left-10 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none'></div>
            <div className='absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-[120px] pointer-events-none'></div>

            <div className='max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8'>

                {/* Left Content - Typography & CTA */}
                <div className='flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10'>
                    <div className="space-y-5">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm shadow-sm">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                            </span>
                            Your Trusted Healthcare Partner
                        </div>

                        {/* Main Headline */}
                        <h1 className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight'>
                            Your Health,
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block mt-2'>Our Priority.</span>
                        </h1>

                        {/* Sub-headline */}
                        <p className='text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed'>
                            Book appointments, manage medicines, and access your health records — all in one simple and secure platform.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start'>
                        <button className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-[16px] font-semibold hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-300'>
                            Get Started
                        </button>
                        <button className='bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-[16px] font-semibold hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300'>
                            Book Appointment
                        </button>
                    </div>

                    {/* Stats Section */}
                    <div className='pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 border-t border-slate-200/60 w-full'>
                        <div className='flex flex-col items-center lg:items-start'>
                            <span className='text-3xl font-extrabold text-slate-900'>50K+</span>
                            <span className='text-sm text-slate-500 font-medium mt-1'>Active Users</span>
                        </div>
                        <div className='hidden sm:block w-px h-12 bg-slate-200'></div>
                        <div className='flex flex-col items-center lg:items-start'>
                            <span className='text-3xl font-extrabold text-slate-900'>99%</span>
                            <span className='text-sm text-slate-500 font-medium mt-1'>Satisfaction</span>
                        </div>
                        <div className='hidden sm:block w-px h-12 bg-slate-200'></div>
                        <div className='flex flex-col items-center lg:items-start'>
                            <span className='text-3xl font-extrabold text-slate-900'>24/7</span>
                            <span className='text-sm text-slate-500 font-medium mt-1'>Support</span>
                        </div>
                    </div>
                </div>

                {/* Right Content - Image */}
                <div className='flex-1 relative z-10 w-full max-w-lg lg:max-w-none flex justify-center lg:justify-end py-10 lg:py-0'>
                    {/* Elegant layered background style */}
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[70%] aspect-square bg-gradient-to-tr from-blue-100/60 to-indigo-50/60 rounded-[3rem] rotate-6 -z-10 transition-transform hover:rotate-12 duration-700'></div>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[70%] aspect-square border-2 border-blue-100/80 rounded-[3rem] -rotate-3 -z-10'></div>
                    
                    <img 
                        src={HeroImg} 
                        alt="Healthcare Illustration" 
                        className="w-[90%] md:w-[80%] h-auto object-contain drop-shadow-xl z-10 relative"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-4 lg:bottom-12 right-0 lg:right-10 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 z-20" style={{ animation: 'floating 4s ease-in-out infinite alternate' }}>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold text-xl">
                                ✓
                            </div>
                            <div>
                                <p className="text-[15px] font-bold text-slate-900 leading-tight">Top Doctors</p>
                                <p className="text-[13px] text-slate-500 font-medium">Verified Profiles</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Custom Animation Styles */}
            <style>{`
                @keyframes floating {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>
        </section>
    )
}

export default HeroSection