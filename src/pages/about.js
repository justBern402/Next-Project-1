import Navbar from "@/Components/Navbar";
import Footer from "@/pages/Footer";

function StarRating({ rating }) {
    return (
        <div className="flex space-x-1 mt-3">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-5 h-5 ${star <= rating ? "text-yellow-400" : "text-gray-600"
                        }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2l3 7h7l-5.5 4 2.5 7-6-4-6 4 2.5-7L2 9h7z" />
                </svg>
            ))}
        </div>
    );
}

export default function About() {

    const techs = [
        {
            title: "Web Development",
            desc: "Building fast, responsive, and scalable web applications using modern frameworks.",
            icon: "💻",
            rating: 5,
        },
        {
            title: "Artificial Intelligence",
            desc: "Creating smart solutions powered by machine learning and automation.",
            icon: "🤖",
            rating: 4,
        },
        {
            title: "Cloud Computing",
            desc: "Deploying secure and high-performance systems in the cloud.",
            icon: "☁️",
            rating: 4,
        },
        {
            title: "UI / UX Design",
            desc: "Designing beautiful and user-friendly digital experiences.",
            icon: "🎨",
            rating: 5,
        },
        {
            title: "Cyber Security",
            desc: "Protecting data and systems with modern security practices.",
            icon: "🔐",
            rating: 3,
        },
        {
            title: "Mobile Development",
            desc: "Developing cross-platform mobile apps with modern tools.",
            icon: "📱",
            rating: 4,
        },
    ];

    return (
        <>
            <Navbar />

            <section id="technologies" className="bg-black py-20 px-6 md:px-16 text-white">

                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                        Technologies
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Modern tools and technologies that power innovative solutions
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {techs.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 
              hover:scale-105 transition-transform duration-300 hover:shadow-xl"
                        >
                            <div className="text-4xl mb-4">{tech.icon}</div>

                            <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {tech.desc}
                            </p>

                            {/* Rating */}
                            <StarRating rating={tech.rating} />
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}