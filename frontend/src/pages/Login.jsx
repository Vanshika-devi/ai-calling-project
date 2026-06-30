import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            NexTech
          </h1>

          <p className="text-gray-400 mt-3">
            Sign in to your account
          </p>

        </div>

        {/* Card */}

        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8">

          <form className="space-y-6">

            {/* Email */}

            <div>

              <label className="block text-sm mb-2 text-gray-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  rounded-xl
                  bg-[#0F172A]
                  border
                  border-gray-700
                  px-4
                  py-3
                  outline-none
                  focus:border-emerald-500
                  transition
                "
              />

            </div>

           {/* Password */}

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="
                  w-full
                  rounded-xl
                  bg-[#0F172A]
                  border
                  border-gray-700
                  px-4
                  py-3
                  outline-none
                  focus:border-emerald-500
                  transition
                "
              />

              <div className="flex justify-end mt-2">
                <Link
                  to="/forgot-password"
                  className="text-sm text-emerald-400 hover:text-cyan-400 transition"
                >
                  Forgot Password?
                </Link>
              </div>

            </div>   

            {/* Login Button */}

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
              Sign In
            </button>

          </form>

          {/* Divider */}

          <div className="my-8 border-t border-gray-800" />

          {/* Register */}

          <p className="text-center text-gray-400">

            Don't have an account?

            <Link
              to="/register"
              className="ml-2 text-emerald-400 hover:text-cyan-400"
            >
              Sign Up
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}