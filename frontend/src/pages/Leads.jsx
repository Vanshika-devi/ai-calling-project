import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { Search, Eye } from "lucide-react";

export default function Leads() {
  const leads = [
    {
      id: 1,
      customer: "Rajat Sharma",
      service: "Website Development",
      score: 80,
      status: "interested",
      notes: "Asked about website development pricing",
    },
    {
      id: 2,
      customer: "Priya Verma",
      service: "WhatsApp Business API Integration",
      score: 70,
      status: "follow_up",
      notes: "Interested in WhatsApp Business API Integration",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredLeads = leads.filter(
    (lead) =>
      lead.customer.toLowerCase().includes(search.toLowerCase()) ||
      lead.service.toLowerCase().includes(search.toLowerCase())
  );

  const getStatus = (status) => {
    switch (status) {
      case "interested":
        return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";

      case "follow_up":
        return "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20";

      default:
        return "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20";
    }
  };

  const formatStatus = (status) => {
    switch (status) {
      case "follow_up":
        return "Follow Up";

      case "interested":
        return "Interested";

      default:
        return "New";
    }
  };

  return (
    <AppLayout>

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <p className="text-emerald-400 uppercase tracking-[0.25em] text-sm mb-2">
            Leads
          </p>

          <h1 className="text-4xl font-bold">
            Qualified Leads
          </h1>

          <p className="text-gray-400 mt-3 max-w-xl">
            View and manage leads generated through AI calling campaigns.
          </p>

        </div>

      </div>

      {/* Search */}

      <div className="relative mt-10">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="text"
          placeholder="Search leads..."
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
            focus:border-emerald-500
            transition
          "
        />

      </div>

      {/* Table */}

      <div className="mt-8 overflow-hidden rounded-2xl border border-gray-800 bg-[#111827]">

        <table className="w-full">

          <thead className="border-b border-gray-800 text-gray-400">

            <tr>

              <th className="text-left px-6 py-4">Customer</th>

              <th className="text-left">Service</th>

              <th className="text-left">Lead Score</th>

              <th className="text-left">Status</th>

              <th className="text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredLeads.map((lead) => (

              <tr
                key={lead.id}
                className="border-b border-gray-800 hover:bg-[#1A2435] transition"
              >

                <td className="px-6 py-5 font-medium">
                  {lead.customer}
                </td>

                <td>
                  {lead.service}
                </td>

                <td className="w-56">

                  <div className="flex items-center gap-3">

                    <div className="w-28 h-2 rounded-full bg-gray-700 overflow-hidden">

                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                        style={{
                          width: `${lead.score}%`,
                        }}
                      />

                    </div>

                    <span className="text-sm text-gray-300">
                      {lead.score}/100
                    </span>

                  </div>

                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatus(
                      lead.status
                    )}`}
                  >
                    {formatStatus(lead.status)}
                  </span>

                </td>

                <td>

                  <button
                    className="
                      mx-auto
                      flex
                      items-center
                      gap-2
                      text-emerald-400
                      hover:text-white
                      transition
                    "
                  >

                    <Eye size={18} />

                    <span className="text-sm">
                      Details
                    </span>

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </AppLayout>
  );
}