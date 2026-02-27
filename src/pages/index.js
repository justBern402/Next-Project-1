import Navbar from '@/Components/Navbar'
import Footer from '@/pages/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative w-full h-screen overflow-hidden">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1502318217862-aa4e294ba657?auto=format&fit=crop&q=80&w=1500"
          alt="space hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-16 text-teal-100">

          <h1 className="text-3xl md:text-5xl font-mono font-extrabold tracking-wide animate-fade-in">
            Thinking
          </h1>

          <h1 className="text-6xl md:text-8xl font-mono font-extrabold bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            Out of the Box
          </h1>

          {/* Tech tagline */}
          <p className="mt-6 max-w-xl text-lg md:text-xl text-teal-200/90 leading-relaxed">
            Building smart digital solutions with modern technology, creative design, and powerful code.
          </p>

          {/* Button */}
          <button className="mt-10 w-fit px-10 py-3 rounded-xl border border-teal-300/40 backdrop-blur-md bg-white/5 
            hover:bg-teal-500/10 hover:scale-105 transition-all duration-300 shadow-lg">
            <span className="text-teal-200 font-semibold tracking-wide">
              Explore Technology
            </span>
          </button>

        </div>

      </main>

      <Footer />
    </>
  );
}