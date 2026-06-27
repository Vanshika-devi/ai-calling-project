import {
  PhoneCall,
  Users,
  UserCheck,
  MessageSquare,
} from "lucide-react";

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

  const accent =
    color === "cyan"
      ? "text-cyan-400 border-cyan-500/20 bg-cyan-500/10"
      : "text-emerald-400 border-emerald-500/20 bg-emerald-500/10";

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-2xl
      p-[1px]
      bg-gradient-to-br
      from-emerald-500/40
      via-cyan-500/30
      to-emerald-500/40
      hover:shadow-[0_15px_40px_rgba(16,185,129,0.12)]
      hover:-translate-y-1
      transition-all
      duration-300
    "
    >
      {/* Accent Line */}
      <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 opacity-70" />

      <div className="bg-[#111827] rounded-2xl p-6 h-full">

        <div
          className={`
            w-12
            h-12
            rounded-xl
            border
            flex
            items-center
            justify-center
            ${accent}
            group-hover:scale-110
            group-hover:rotate-6
            transition-all
            duration-300
          `}
        >
          {getIcon()}
        </div>

        <p className="text-gray-400 text-sm mt-5">
          {title}
        </p>

        <h2
          className="
          text-3xl
          font-bold
          mt-2
          transition-colors
          duration-300
          group-hover:text-emerald-400
        "
        >
          {value}
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          {subtitle}
        </p>

        {/* Bottom Glow */}
        <div
          className="
          mt-6
          h-px
          bg-gradient-to-r
          from-transparent
          via-gray-700
          to-transparent
          group-hover:via-emerald-500/40
          transition-all
          duration-300
        "
        />

      </div>
    </div>
  );
}