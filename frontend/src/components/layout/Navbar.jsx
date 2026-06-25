import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-900">

      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <Link to="/" className="text-3xl font-bold">

          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            NexTech
          </span>

        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-300">

          <Link
            to="/"
            className="hover:text-white transition"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-white transition"
          >
            Dashboard
          </Link>

          <Link
            to="/campaigns"
            className="hover:text-white transition"
          >
            Campaigns
          </Link>

          <Link
            to="/leads"
            className="hover:text-white transition"
          >
            Leads
          </Link>

        </nav>

        <div className="flex items-center gap-4">

          <button className="text-gray-300 hover:text-white transition">
            Login
          </button>

          <button
            className="
            px-5 py-2.5
            rounded-xl
            bg-gradient-to-r
            from-emerald-500
            to-cyan-500
            text-white
            font-medium
            hover:scale-105
            transition-all
            duration-300
            shadow-lg
            shadow-emerald-500/20
          "
          >
            Get Started
          </button>

        </div>

      </div>

    </header>
  );
}