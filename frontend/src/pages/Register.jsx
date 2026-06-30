import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        {/* Logo */}

        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            NexTech
          </h1>

          <p className="text-gray-400 mt-3">
            Create your account
          </p>

        </div>

        {/* Card */}

        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8">

          <form className="space-y-5">

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-[#0F172A] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#0F172A] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                className="w-full bg-[#0F172A] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition"
              />
            </div>
            <div>
              {/* confirm password*/}
            <label className="block text-sm text-gray-300 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="
                w-full
                bg-[#0F172A]
                border
                border-gray-700
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-emerald-500
                transition
              "
            />
          </div>

            <button
              className="
                w-full
                py-3
                rounded-xl
                bg-gradient-to-r
                from-emerald-500
                to-cyan-500
                font-semibold
                hover:scale-[1.02]
                transition
              "
            >
              Create Account
            </button>

          </form>

          <div className="my-8 border-t border-gray-800" />

          <p className="text-center text-gray-400">

            Already have an account?

            <Link
              to="/login"
              className="ml-2 text-emerald-400 hover:text-cyan-400"
            >
              Sign In
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}