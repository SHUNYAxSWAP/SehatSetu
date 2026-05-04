import React from 'react'

const Contact = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="Contact">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-50 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
            
            {/* Header Section */}
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6">
                    Let's Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Touch</span>
                </h1>
                <p className="text-lg text-slate-600">
                    We’d love to hear from you. Reach out through any of the channels below or fill out the form, and our team will get back to you shortly.
                </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
                
                {/* Contact Information (2 columns wide on LG) */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Info Card 1 */}
                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all">
                        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl shrink-0">
                            📞
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">Phone</h3>
                            <p className="text-slate-600">Mon-Fri from 8am to 5pm.</p>
                            <a href="tel:+1234567890" className="text-blue-600 font-semibold mt-2 inline-block hover:underline">+1 (234) 567-890</a>
                        </div>
                    </div>

                    {/* Info Card 2 */}
                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl shrink-0">
                            ✉️
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                            <p className="text-slate-600">Our friendly team is here to help.</p>
                            <a href="mailto:hello@sehatsetu.com" className="text-indigo-600 font-semibold mt-2 inline-block hover:underline">hello@sehatsetu.com</a>
                        </div>
                    </div>

                    {/* Info Card 3 */}
                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-100 hover:shadow-md transition-all">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl shrink-0">
                            📍
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">Office</h3>
                            <p className="text-slate-600">Come say hello at our headquarters.</p>
                            <p className="text-emerald-600 font-semibold mt-2">100 Health Ave, NY 10001</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form (3 columns wide on LG) */}
                <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">First Name</label>
                                <input type="text" placeholder="John" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Last Name</label>
                                <input type="text" placeholder="Doe" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Email Address</label>
                            <input type="email" placeholder="john@example.com" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Message</label>
                            <textarea rows="4" placeholder="How can we help you?" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"></textarea>
                        </div>

                        <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-200">
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Contact;