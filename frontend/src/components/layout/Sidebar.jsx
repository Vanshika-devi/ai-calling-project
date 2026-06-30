import { Link, useLocation } from "react-router-dom";
import {
  House,
  LayoutDashboard,
  Megaphone,
  UserCheck,
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    {
      name: "Home",
      path: "/",
      icon: House,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Campaigns",
      path: "/campaigns",
      icon: Megaphone,
    },
    {
      name: "Leads",
      path: "/leads",
      icon: UserCheck,
    },
  ];

  return (
    <aside className="w-60 min-h-screen bg-[#111827] border-r border-gray-800 flex flex-col">

      {/* Logo */}

      <div className="px-6 py-6 border-b border-gray-800">

        <Link
          to="/"
          className="text-2xl font-bold"
        >
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            NexTech
          </span>
        </Link>

        <p className="text-xs text-gray-500 mt-1">
          AI Voice Platform
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-5">

        <div className="space-y-2">

          {menu.map((item) => {

            const Icon = item.icon;

            const active = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300
                  ${
                    active
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20"
                      : "text-gray-400 hover:bg-[#1A2435] hover:text-white"
                  }`}
              >

                <Icon size={18} />

                <span className="text-sm font-medium">
                  {item.name}
                </span>

              </Link>
            );

          })}

        </div>

      </nav>

      {/* Bottom */}

      <div className="border-t border-gray-800 p-4 space-y-3">

        <Link
          to="/login"
          className="
            block
            w-full
            py-2.5
            rounded-xl
            text-center
            border
            border-gray-700
            text-gray-300
            hover:border-gray-500
            hover:text-white
            transition
            text-sm
          "
        >
          Login
        </Link>

        <Link
          to="/register"
          className="
            block
            w-full
            py-2.5
            rounded-xl
            text-center
            bg-gradient-to-r
            from-emerald-500
            to-cyan-500
            text-white
            font-medium
            hover:scale-[1.02]
            transition-all
            duration-300
            shadow-lg
            shadow-emerald-500/20
            text-sm
          "
        >
          Get Started
        </Link>

      </div>

    </aside>
  );
}