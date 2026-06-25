import { PhoneCall, Users, UserCheck, MessageSquare } from "lucide-react";

export default function StatCard({ title, value, subtitle, color }) {
  const getIcon = () => {
    switch (title) {
      case "Campaigns":
        return <PhoneCall size={22} />;
      case "Customers":
        return <Users size={22} />;
      case "Leads":
        return <UserCheck size={22} />;
      case "Conversations":
        return <MessageSquare size={22} />;
      default:
        return <PhoneCall size={22} />;
    }
  };

  const iconBg =
    color === "cyan"
      ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
      : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";

  return (
    <div
      className="
        group
        rounded-2xl
        p-[1px]
        bg-gradient-to-br
        from-emerald-500/40
        via-cyan-500/30
        to-emerald-500/40
        hover:shadow-[0_0_25px_rgba(16,185,129,0.12)]
        transition-all
        duration-300
      "
    >
      <div className="bg-[#111827] rounded-2xl p-6 h-full">

        <div
          className={`w-12 h-12 rounded-xl border flex items-center justify-center ${iconBg}`}
        >
          {getIcon()}
        </div>

        <p className="text-gray-400 text-sm mt-5">
          {title}
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          {subtitle}
        </p>

      </div>
    </div>
  );
}