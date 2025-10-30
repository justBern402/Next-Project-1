import Navbar from '@/Components/Navbar'

export default function Contact() {

    return (
        <>
                <Navbar />

            <section className="py-16 px-6 lg:px-20">

                <div className="max-w-6xl mx-auto lg:mt-30 md:mt-30 mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 bg-teal-900 rounded-2xl shadow-lg overflow-hidden">


                    <div className="p-8 flex flex-col justify-center">
                        <h2 className="text-4xl font-bold mb-4 text-teal-300">Get in Touch</h2>
                        <p className="text-gray-200 mb-6">
                            We’d love to hear from you! let's talk about discoveries, Fill out the form or reach us using the details below.
                        </p>

                        <div className="space-y-4 text-gray-300">
                            <p><span className="font-semibold text-teal-300">Email:</span> Bernabe@gmail.com</p>
                            <p><span className="font-semibold text-teal-300">Phone:</span> +63 951 073 9405</p>
                            <p><span className="font-semibold text-teal-300">Address:</span> Pandulian City, Philippines</p>
                        </div>
                    </div>


                    <div className="bg-teal-800 p-8">
                        <form className="space-y-5">
                            <div>
                                <label className="block text-sm mb-1 text-gray-200">Full Name</label>
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-md bg-teal-950 text-white border border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400" />
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-gray-200">Email</label>
                                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md bg-teal-950 text-white border border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400" />
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-gray-200">Message</label>
                                <textarea rows="5" placeholder="Make Message" className="w-full px-4 py-2 rounded-md bg-teal-950 text-white border border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-teal-400 hover:bg-teal-300 text-teal-950 font-semibold py-2 rounded-md transition cursor-pointer">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>


           
            <footer className="bg-teal-950 text-gray-300 py-10 px-6 lg:px-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                 
                    <div>
                        <h2 className="text-2xl font-bold text-teal-300 mb-3">uniVERSE</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Building meaningful connections through science and discoveries.
                        </p>
                    </div>

             
                    <div>
                        <h3 className="text-lg font-semibold text-teal-200 mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-teal-400 transition">Home</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition">About</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition">Contact</a></li>
                        </ul>
                    </div>

                   
                    <div>
                        <h3 className="text-lg font-semibold text-teal-200 mb-3">Contact</h3>
                        <p className="text-sm text-gray-400">Pandulian City, Philippines</p>
                        <p className="text-sm text-gray-400">Email: bernabe@gmail.com</p>
                        <p className="text-sm text-gray-400 mb-3">Phone: +63 951 073 9405</p>

                        <div className="flex space-x-4 mt-2">
                            <a href="#" className="hover:text-teal-400 transition">
                              
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.5c0-2.4 1.5-3.7 3.6-3.7 1 0 2 .1 2.3.1v2.6h-1.6c-1.3 0-1.7.8-1.7 1.6v1.9h3.1l-.5 2.9h-2.6v7A10 10 0 0 0 22 12z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-teal-400 transition">
                              
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.1 1.5 4.5 4.5 0 0 0-7.8 4v1A10.6 10.6 0 0 1 3 4s-4 9 5 13a11.7 11.7 0 0 1-7 2c9 5 20 0 20-11.5A4.6 4.6 0 0 0 23 3z" />
                                </svg>
                            </a>
                            <a href="#" clasName="hover:text-teal-400 transition">
                              
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.6v1.7a4 4 0 0 1 3.4-1.8c3.6 0 4.3 2.3 4.3 5.2V21h-4v-5.4c0-1.3 0-3-1.8-3s-2 1.4-2 2.9V21H9z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-teal-800 mt-10 pt-6 text-center text-gray-500 text-sm">
                    © 2025 uniVERSE. All rights reserved.
                </div>
            </footer>


        </>
    )
}