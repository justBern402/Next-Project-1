import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-xl bg-black/50 border-b border-white/10 shadow-2xl">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">

                    {/* Logo */}
                    <h1 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent tracking-wide">
                        Upgrade
                    </h1>

                    {/* Links */}
                    <ul className="flex gap-6 md:gap-10 text-white/90 font-medium">

                        {["Home", "About", "Contact"].map((item) => (
                            <li key={item} className="relative group">
                                <Link
                                    href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                                    className="transition duration-300 hover:text-pink-400"
                                >
                                    {item}
                                </Link>

                                {/* Animated underline */}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}

                    </ul>
                </div>
            </nav>
        </>
    );
}