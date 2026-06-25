import Navbar from "../components/layout/Navbar";

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
      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="text-center mb-14">

          <p className="text-emerald-400 uppercase tracking-widest text-sm mb-4">
            Features
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Run AI-powered calling campaigns from one platform.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition">
            <h3 className="text-lg font-semibold mb-3">
              AI Voice Calls
            </h3>

            <p className="text-gray-400">
              Automate outbound sales and customer support calls.
            </p>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition">
            <h3 className="text-lg font-semibold mb-3">
              Lead Qualification
            </h3>

            <p className="text-gray-400">
              Automatically identify and score interested customers.
            </p>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition">
            <h3 className="text-lg font-semibold mb-3">
              Call Transcription
            </h3>

            <p className="text-gray-400">
              Convert voice conversations into searchable text.
            </p>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition">
            <h3 className="text-lg font-semibold mb-3">
              Campaign Management
            </h3>

            <p className="text-gray-400">
              Create, manage and monitor AI calling campaigns.
            </p>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition">
            <h3 className="text-lg font-semibold mb-3">
              Conversation History
            </h3>

            <p className="text-gray-400">
              Access all customer interactions from one place.
            </p>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition">
            <h3 className="text-lg font-semibold mb-3">
              Analytics Dashboard
            </h3>

            <p className="text-gray-400">
              Track conversions, calls and campaign performance.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}