import Navbar from "../components/layout/Navbar";

export default function Campaigns() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-4xl font-bold">
              Campaigns
            </h1>

            <p className="text-gray-400 mt-2">
              Manage your AI calling campaigns.
            </p>
          </div>

          <button
            className="
            px-5 py-3
            rounded-xl
            bg-gradient-to-r
            from-emerald-500
            to-cyan-500
            font-medium
          "
          >
            + Create Campaign
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">
              Website Leads Campaign
            </h3>

            <p className="text-gray-400 mt-2">
              AI calling campaign for website prospects.
            </p>

            <div className="flex justify-between mt-6">
              <span>143 Calls</span>
              <span className="text-emerald-400">
                Running
              </span>
            </div>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">
              Marketing Campaign
            </h3>

            <p className="text-gray-400 mt-2">
              Follow-up campaign for warm leads.
            </p>

            <div className="flex justify-between mt-6">
              <span>82 Calls</span>
              <span className="text-yellow-400">
                Paused
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}