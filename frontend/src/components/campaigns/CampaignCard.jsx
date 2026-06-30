// src/components/campaigns/CampaignCard.jsx

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
        border
        border-gray-800
        bg-[#111827]
        p-6
        hover:border-emerald-500/30
        hover:shadow-lg
        hover:shadow-emerald-500/5
        transition-all
        duration-300
      "
    >
      {/* Top */}

      <div className="flex items-start justify-between">

        <div
          className="
            w-10
            h-10
            rounded-lg
            bg-emerald-500/10
            border
            border-emerald-500/20
            flex
            items-center
            justify-center
            text-emerald-400
            transition
            duration-300
            group-hover:bg-emerald-500/15
          "
        >
          <PhoneCall
            size={18}
            strokeWidth={2}
          />
        </div>

        <span
          className={`
            px-3
            py-1
            rounded-full
            text-xs
            border
            font-medium
            ${getStatusColor()}
          `}
        >
          {status}
        </span>

      </div>

      {/* Body */}

      <div className="mt-6">

        <h3 className="text-xl font-semibold text-white">
          {name}
        </h3>

        <p className="text-gray-400 mt-2 text-sm">
          {service}
        </p>

      </div>

      {/* Divider */}

      <div className="my-6 border-t border-gray-800" />

      {/* Bottom */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <CircleDot
            size={12}
            className="text-emerald-400"
          />

          <span className="text-sm text-gray-400">
            {calls} Calls
          </span>

        </div>

        <button
          className="
            flex
            items-center
            gap-1
            text-sm
            font-medium
            text-emerald-400
            hover:text-white
            transition-colors
          "
        >
          View

          <ArrowUpRight
            size={14}
            strokeWidth={2}
          />

        </button>

      </div>

    </div>
  );
}