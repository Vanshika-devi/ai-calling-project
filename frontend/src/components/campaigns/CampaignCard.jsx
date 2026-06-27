import {
  PhoneCall,
  CircleDot,
  ArrowUpRight,
} from "lucide-react";

export default function CampaignCard({
  name,
  service,
  status,
  calls,
}) {

  const getStatusColor = () => {
    switch (status) {
      case "Active":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";

      case "Draft":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";

      case "Completed":
        return "text-cyan-400 bg-cyan-500/10 border-cyan-500/20";

      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/20";
    }
  };

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
      hover:shadow-[0_15px_35px_rgba(16,185,129,0.12)]
      hover:-translate-y-1
      transition-all
      duration-300
    "
    >
      <div className="bg-[#111827] rounded-2xl p-6 h-full">

        {/* Top */}

        <div className="flex justify-between items-start">

          <div
            className="
            w-12
            h-12
            rounded-xl
            bg-emerald-500/10
            border
            border-emerald-500/20
            flex
            items-center
            justify-center
            text-emerald-400
            group-hover:scale-110
            transition
          "
          >
            <PhoneCall size={22} />
          </div>

          <span
            className={`
            px-3
            py-1
            rounded-full
            text-xs
            border
            ${getStatusColor()}
          `}
          >
            {status}
          </span>

        </div>

        {/* Body */}

        <div className="mt-6">

          <h3 className="text-xl font-semibold">
            {name}
          </h3>

          <p className="text-gray-400 mt-2">
            {service}
          </p>

        </div>

        {/* Bottom */}

        <div className="flex justify-between items-center mt-8">

          <div className="flex items-center gap-2 text-gray-400">

            <CircleDot
              size={16}
              className="text-emerald-400"
            />

            <span className="text-sm">
              {calls} Calls
            </span>

          </div>

          <button
            className="
            flex
            items-center
            gap-2
            text-sm
            text-emerald-400
            hover:text-white
            transition
          "
          >
            View

            <ArrowUpRight size={16} />

          </button>

        </div>

      </div>

    </div>
  );
}