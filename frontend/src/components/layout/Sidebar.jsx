import {
  LayoutDashboard,
  Megaphone,
  Users,
  Phone,
  FileText,
  Database,
  Settings,
  X,
} from "lucide-react";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
        fixed lg:static
        top-0 left-0
        z-50
        h-screen
        w-72
        bg-[#111827]
        border-r border-[#1F2937]
        transform
        transition-transform
        duration-300
        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        <div className="p-6 flex justify-between items-center">

          <div>
            <h2 className="text-white font-bold text-xl">
              NexTech
            </h2>

            <p className="text-[#9CA3AF] text-sm mt-1">
              AI Voice Agent
            </p>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X />
          </button>

        </div>

        <nav className="px-4 space-y-2">

          <NavItem active icon={<LayoutDashboard size={18} />}>
            Dashboard
          </NavItem>

          <NavItem icon={<Megaphone size={18} />}>
            Campaigns
          </NavItem>

          <NavItem icon={<Users size={18} />}>
            Leads
          </NavItem>

          <NavItem icon={<Phone size={18} />}>
            Calls
          </NavItem>

          <NavItem icon={<FileText size={18} />}>
            Transcripts
          </NavItem>

          <NavItem icon={<Database size={18} />}>
            Knowledge Base
          </NavItem>

          <NavItem icon={<Settings size={18} />}>
            Settings
          </NavItem>

        </nav>
      </aside>
    </>
  );
}

function NavItem({
  children,
  icon,
  active = false,
}) {
  return (
    <button
      className={`
      w-full
      flex
      items-center
      gap-3
      px-4
      py-3
      rounded-xl
      transition
      ${
        active
          ? "bg-[#3B82F6] text-white"
          : "hover:bg-[#1F2937] text-[#D1D5DB]"
      }
    `}
    >
      {icon}
      {children}
    </button>
  );
}