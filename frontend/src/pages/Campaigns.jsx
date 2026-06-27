import Navbar from "../components/layout/Navbar";
import CampaignCard from "../components/campaigns/CampaignCard";

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

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

          <div>

            <p className="text-emerald-400 uppercase tracking-widest text-sm mb-2">
              Campaigns
            </p>

            <h1 className="text-4xl font-bold">
              AI Calling Campaigns
            </h1>

            <p className="text-gray-400 mt-3">
              Create, manage and monitor all your AI calling campaigns.
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
              hover:scale-105
              transition
            "
          >
            + New Campaign
          </button>

        </div>

        {/* Search */}

        <div className="mb-8">

          <input
            type="text"
            placeholder="Search campaigns..."
            className="
              w-full
              bg-[#111827]
              border
              border-gray-800
              rounded-xl
              px-5
              py-3
              outline-none
              focus:border-emerald-500
              transition
            "
          />

        </div>

        {/* Filters */}

        <div className="flex flex-wrap gap-3 mb-10">

          <button className="px-5 py-2 rounded-full bg-emerald-500 text-black font-medium">
            All
          </button>

          <button className="px-5 py-2 rounded-full border border-gray-700 hover:border-emerald-500 transition">
            Active
          </button>

          <button className="px-5 py-2 rounded-full border border-gray-700 hover:border-emerald-500 transition">
            Draft
          </button>

          <button className="px-5 py-2 rounded-full border border-gray-700 hover:border-emerald-500 transition">
            Completed
          </button>

        </div>

        {/* Campaign Cards */}

        <div className="grid md:grid-cols-2 gap-6">

          {campaigns.map((campaign) => (

            <CampaignCard
              key={campaign.id}
              name={campaign.name}
              service={campaign.service}
              status={campaign.status}
              calls={campaign.calls}
            />

          ))}

        </div>

      </div>

    </div>
  );
}