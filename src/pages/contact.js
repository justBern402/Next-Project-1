import Navbar from '@/Components/Navbar'

export default function Contact() {
    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-gradient-to-b from-black via-teal-950 to-black py-20 px-6 lg:px-20">

                <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 
          bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10">

                    {/* Left Content */}
                    <div className="p-10 flex flex-col justify-center">
                        <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                            Get in Touch
                        </h2>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Let’s talk about technology, innovation, and new discoveries.
                            Reach out and build something amazing with us.
                        </p>

                        <div className="space-y-4 text-gray-300">
                            <p><span className="font-semibold text-teal-300">Email:</span> bernabesesing402@gmail.com</p>
                            <p><span className="font-semibold text-teal-300">Phone:</span> +63 951 073 9405</p>
                            <p><span className="font-semibold text-teal-300">Address:</span> Kapalong Davao del Norte, Philippines</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-gradient-to-b from-teal-900/60 to-teal-950/80 p-10">
                        <form className="space-y-5">

                            <div>
                                <label className="block text-sm mb-1 text-gray-200">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 rounded-lg bg-black/40 text-white 
                  border border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-gray-200">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 rounded-lg bg-black/40 text-white 
                  border border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-gray-200">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="w-full px-4 py-2 rounded-lg bg-black/40 text-white 
                  border border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-4 bg-gradient-to-r from-teal-400 to-cyan-400 
                text-black font-semibold py-3 rounded-xl transition-all duration-300 
                hover:scale-105 hover:shadow-[0_0_25px_rgba(45,212,191,0.6)]"
                            >
                                Send Message 🚀
                            </button>

                        </form>
                    </div>

                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-gray-300 py-12 px-6 lg:px-20 border-t border-teal-900">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div>
                        <h2 className="text-2xl font-bold text-teal-300 mb-3">Upgrade</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Connecting people through technology, science, and innovation.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-teal-200 mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="hover:text-teal-400 transition">Home</a></li>
                            <li><a href="/about" className="hover:text-teal-400 transition">About</a></li>
                            <li><a href="/contact" className="hover:text-teal-400 transition">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-teal-200 mb-3">Contact</h3>
                        <p className="text-sm text-gray-400">Kapalong Davao del Norte, Philippines</p>
                        <p className="text-sm text-gray-400">Email: bernabesesing402@gmail.com</p>
                        <p className="text-sm text-gray-400 mb-3">Phone: +63 951 073 9405</p>

                        <div className="flex space-x-4 mt-3">
                            <a href="#" className="hover:text-teal-400 transition">🌐</a>
                            <a href="#" className="hover:text-teal-400 transition">🐦</a>
                            <a href="#" className="hover:text-teal-400 transition">💼</a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-teal-900 mt-10 pt-6 text-center text-gray-500 text-sm">
                    © 2025 Upgrade. All rights reserved.
                </div>
            </footer>
        </>
    )
}