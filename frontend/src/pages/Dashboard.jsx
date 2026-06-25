import Navbar from "../components/layout/Navbar";
import StatCard from "../components/dashboard/StatCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Header */}
        {/* Header */}
<div className="mb-10">

  <p className="text-emerald-400 text-sm uppercase tracking-widest mb-2">
    Dashboard
  </p>

  <h1 className="text-4xl font-bold">
    Welcome Back 👋
  </h1>

  <p className="text-gray-400 mt-3 max-w-xl">
    Monitor your AI calling platform, track campaigns, manage customers,
    and review recent conversations from one place.
  </p>

</div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <StatCard
            title="Campaigns"
            value="03"
            subtitle="Active Campaigns"
            color="emerald"
          />

          <StatCard
            title="Customers"
            value="11"
            subtitle="Registered"
            color="cyan"
          />

          <StatCard
            title="Leads"
            value="09"
            subtitle="Qualified"
            color="emerald"
          />

          <StatCard
            title="Conversations"
            value="05"
            subtitle="Completed"
            color="cyan"
          />

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Recent Campaigns */}

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-xl font-semibold">
                Recent Campaigns
              </h2>

              <button className="text-emerald-400 text-sm hover:underline">
                View All
              </button>

            </div>

            <div className="space-y-4">

              <div className="border border-gray-800 rounded-xl p-4 hover:border-emerald-500/40 transition">
                <h3 className="font-medium">
                  Website Development
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  Status: Active • 120 Calls
                </p>
              </div>

              <div className="border border-gray-800 rounded-xl p-4 hover:border-emerald-500/40 transition">
                <h3 className="font-medium">
                  Google Ads
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  Status: Draft • 0 Calls
                </p>
              </div>

              <div className="border border-gray-800 rounded-xl p-4 hover:border-emerald-500/40 transition">
                <h3 className="font-medium">
                  Meta Ads
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  Status: Completed • 84 Calls
                </p>
              </div>

            </div>

          </div>

          {/* Recent Leads */}

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-xl font-semibold">
                Recent Leads
              </h2>

              <button className="text-emerald-400 text-sm hover:underline">
                View All
              </button>

            </div>

            <div className="space-y-4">

              <div className="border border-gray-800 rounded-xl p-4 hover:border-cyan-500/40 transition">
                <h3 className="font-medium">
                  Rahul
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  Website Development • New Lead
                </p>
              </div>

              <div className="border border-gray-800 rounded-xl p-4 hover:border-cyan-500/40 transition">
                <h3 className="font-medium">
                  Amit
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  Google Ads • Qualified
                </p>
              </div>

              <div className="border border-gray-800 rounded-xl p-4 hover:border-cyan-500/40 transition">
                <h3 className="font-medium">
                  Priya
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  Mobile App Development • Contacted
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}