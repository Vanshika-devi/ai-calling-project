import Navbar from "../components/layout/Navbar";
import {
  PhoneCall,
  Users,
  Mic,
  Layers3,
  History,
  BarChart3,
} from "lucide-react";
export default function LandingPage() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative py-20">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/10 blur-[180px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-8 text-center">

          <div className="inline-flex px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm">
            AI Voice Calling Platform
          </div>

          <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Convert Leads Into
            <br />
            Customers
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              With AI Voice Agents
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Launch intelligent outbound campaigns,
            qualify prospects automatically,
            and manage every conversation from a single dashboard.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <button
              className="
              px-8 py-4
              rounded-xl
              bg-gradient-to-r
              from-emerald-500
              to-cyan-500
              font-semibold
              hover:scale-105
              transition
              shadow-xl
              shadow-emerald-500/20
            "
            >
              Start Free Trial
            </button>

            <button
              className="
              px-8 py-4
              rounded-xl
              border
              border-gray-700
              hover:border-gray-500
              transition
            "
            >
              Book Demo
            </button>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-8 pb-20">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 text-center">
            <h2 className="text-4xl font-bold text-emerald-400">
              10K+
            </h2>

            <p className="text-gray-400 mt-3">
              Calls Processed
            </p>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 text-center">
            <h2 className="text-4xl font-bold text-cyan-400">
              95%
            </h2>

            <p className="text-gray-400 mt-3">
              Speech Accuracy
            </p>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 text-center">
            <h2 className="text-4xl font-bold text-emerald-400">
              24/7
            </h2>

            <p className="text-gray-400 mt-3">
              AI Availability
            </p>
          </div>

        </div>
      </section>
      
  {/* FEATURES */}
  <section className="max-w-7xl mx-auto px-8 py-24">

    <div className="text-center mb-16">

      <p className="text-emerald-400 uppercase tracking-[0.25em] text-sm mb-4">
        Features
      </p>

      <h2 className="text-4xl font-bold">
        Everything You Need
      </h2>

      <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
        Powerful tools designed to automate, manage and optimize your AI calling workflow.
      </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* AI Voice Calls */}
    <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-emerald-500/50 via-cyan-500/40 to-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 hover:-translate-y-1">

      <div className="bg-[#111827] rounded-2xl p-7 h-full">

        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
          <PhoneCall size={22} className="text-emerald-400 group-hover:scale-110 transition" />
        </div>

        <h3 className="text-lg font-semibold mb-3">
          AI Voice Calls
        </h3>

        <p className="text-gray-400 text-sm leading-6">
          Automate outbound sales and customer support calls using AI voice agents.
        </p>

      </div>

    </div>

    {/* Lead Qualification */}
    <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-emerald-500/50 via-cyan-500/40 to-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 hover:-translate-y-1">

      <div className="bg-[#111827] rounded-2xl p-7 h-full">

        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
          <Users size={22} className="text-cyan-400 group-hover:scale-110 transition" />
        </div>

        <h3 className="text-lg font-semibold mb-3">
          Lead Qualification
        </h3>

        <p className="text-gray-400 text-sm leading-6">
          Automatically identify qualified leads and prioritize follow-ups.
        </p>

      </div>

    </div>

    {/* Call Transcription */}
    <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-emerald-500/50 via-cyan-500/40 to-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 hover:-translate-y-1">

      <div className="bg-[#111827] rounded-2xl p-7 h-full">

        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
          <Mic size={22} className="text-emerald-400 group-hover:scale-110 transition" />
        </div>

        <h3 className="text-lg font-semibold mb-3">
          Call Transcription
        </h3>

        <p className="text-gray-400 text-sm leading-6">
          Convert voice conversations into searchable text instantly.
        </p>

      </div>

    </div>

    {/* Campaign Management */}
    <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-emerald-500/50 via-cyan-500/40 to-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 hover:-translate-y-1">

      <div className="bg-[#111827] rounded-2xl p-7 h-full">

        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
          <Layers3 size={22} className="text-cyan-400 group-hover:scale-110 transition" />
        </div>

        <h3 className="text-lg font-semibold mb-3">
          Campaign Management
        </h3>

        <p className="text-gray-400 text-sm leading-6">
          Launch and monitor AI calling campaigns from one dashboard.
        </p>

      </div>

    </div>

    {/* Conversation History */}
    <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-emerald-500/50 via-cyan-500/40 to-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 hover:-translate-y-1">

      <div className="bg-[#111827] rounded-2xl p-7 h-full">

        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
          <History size={22} className="text-emerald-400 group-hover:scale-110 transition" />
        </div>

        <h3 className="text-lg font-semibold mb-3">
          Conversation History
        </h3>

        <p className="text-gray-400 text-sm leading-6">
          Access every customer interaction from one centralized workspace.
        </p>

      </div>

    </div>

    {/* Analytics */}
    <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-emerald-500/50 via-cyan-500/40 to-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 hover:-translate-y-1">

      <div className="bg-[#111827] rounded-2xl p-7 h-full">

        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
          <BarChart3 size={22} className="text-cyan-400 group-hover:scale-110 transition" />
        </div>

        <h3 className="text-lg font-semibold mb-3">
          Analytics Dashboard
        </h3>

        <p className="text-gray-400 text-sm leading-6">
          Monitor call performance, conversions and campaign insights.
        </p>

      </div>

    </div>

  </div>

</section>

    </div>
  );
}