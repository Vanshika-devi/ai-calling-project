import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import CampaignCard from "../components/campaigns/CampaignCard";
import { Search } from "lucide-react";

export default function Campaigns() {
  const campaigns = [
    {
      id: 1,
      name: "Website Growth",
      service: "Website Development",
      status: "Active",
      calls: 120,
    },
    {
      id: 2,
      name: "Meta Lead Generation",
      service: "Meta Ads",
      status: "Active",
      calls: 86,
    },
    {
      id: 3,
      name: "Google Search Campaign",
      service: "Google Ads",
      status: "Draft",
      calls: 0,
    },
    {
      id: 4,
      name: "SaaS Outreach",
      service: "SaaS Product Development",
      status: "Completed",
      calls: 214,
    },
  ];

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesStatus =
      filter === "All" || campaign.status === filter;

    const matchesSearch =
      campaign.name.toLowerCase().includes(search.toLowerCase()) ||
      campaign.service.toLowerCase().includes(search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <AppLayout>

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>

          <p className="text-emerald-400 uppercase tracking-[0.25em] text-sm mb-3">
            Campaigns
          </p>

          <h1 className="text-4xl font-bold">
            AI Calling Campaigns
          </h1>

          <p className="text-gray-400 mt-3 max-w-xl">
            Create, manage and monitor AI voice calling campaigns
            for different services.
          </p>

        </div>

        <button
          className="
            px-6
            py-3
            rounded-xl
            bg-gradient-to-r
            from-emerald-500
            to-cyan-500
            font-semibold
            shadow-lg
            shadow-emerald-500/20
            hover:scale-105
            transition
          "
        >
          + New Campaign
        </button>

      </div>

      {/* Search */}

      <div className="relative mt-10">

        <Search
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="text"
          placeholder="Search campaigns..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            bg-[#111827]
            border
            border-gray-800
            rounded-xl
            py-3
            pl-12
            pr-4
            outline-none
            transition
            focus:border-emerald-500
          "
        />

      </div>

      {/* Filters */}

      <div className="flex flex-wrap gap-3 mt-8">

        {["All", "Active", "Draft", "Completed"].map((item) => (

          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`
              px-5
              py-2
              rounded-full
              transition
              ${
                filter === item
                  ? "bg-emerald-500 text-black font-semibold"
                  : "border border-gray-700 hover:border-emerald-500"
              }
            `}
          >
            {item}
          </button>

        ))}

      </div>

      {/* Campaign Cards */}

      <div className="grid lg:grid-cols-2 gap-6 mt-10">

        {filteredCampaigns.map((campaign) => (

          <CampaignCard
            key={campaign.id}
            name={campaign.name}
            service={campaign.service}
            status={campaign.status}
            calls={campaign.calls}
          />

        ))}

      </div>

      {/* Empty State */}

      {filteredCampaigns.length === 0 && (

        <div className="mt-20 text-center">

          <h3 className="text-xl font-semibold">
            No campaigns found
          </h3>

          <p className="text-gray-400 mt-2">
            Try changing the filters or search term.
          </p>

        </div>

      )}

    </AppLayout>
  );
}