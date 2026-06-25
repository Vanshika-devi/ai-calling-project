import Navbar from "../components/layout/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-gray-400 mt-2">
            Monitor calls, leads and campaign performance.
          </p>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-400">Total Leads</p>
            <h2 className="text-4xl font-bold mt-2">124</h2>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-400">Calls Today</p>
            <h2 className="text-4xl font-bold mt-2">57</h2>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-400">Campaigns</p>
            <h2 className="text-4xl font-bold mt-2">8</h2>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-400">Conversion Rate</p>
            <h2 className="text-4xl font-bold mt-2 text-emerald-400">
              32%
            </h2>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-5">
              Recent Campaigns
            </h3>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Website Leads Campaign</span>
                <span className="text-emerald-400">Running</span>
              </div>

              <div className="flex justify-between">
                <span>Digital Marketing Campaign</span>
                <span className="text-yellow-400">Paused</span>
              </div>

              <div className="flex justify-between">
                <span>SaaS Demo Campaign</span>
                <span className="text-emerald-400">Running</span>
              </div>

            </div>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-5">
              Recent Leads
            </h3>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Rahul Sharma</span>
                <span>Interested</span>
              </div>

              <div className="flex justify-between">
                <span>Priya Verma</span>
                <span>Callback</span>
              </div>

              <div className="flex justify-between">
                <span>Amit Kumar</span>
                <span>Qualified</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}