export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-teal-950 to-black text-gray-300 py-14 px-6 lg:px-20 border-t border-teal-900">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent mb-3">
            Upgrade
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Building meaningful connections through science, discoveries, and modern technologies.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-teal-200 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-400 transition cursor-pointer">Home</li>
            <li className="hover:text-teal-400 transition cursor-pointer">About</li>
            <li className="hover:text-teal-400 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-teal-200 mb-4">Contact</h3>
          <p className="text-sm text-gray-400">Kapalong, Davao del Norte, Philippines</p>
          <p className="text-sm text-gray-400">Email: bernabesesing402@gmail.com</p>
          <p className="text-sm text-gray-400">Phone: +63 951 073 9405</p>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-teal-800/60 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2025 <span className="text-teal-400 font-semibold">Upgrade</span>. All rights reserved.
      </div>
    </footer>
  );
}