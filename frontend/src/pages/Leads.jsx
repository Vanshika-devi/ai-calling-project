import Navbar from "../components/layout/Navbar";

export default function Leads() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <main className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">
          Leads
        </h1>

        <div className="bg-[#111827] rounded-2xl p-6">

          Leads table will be connected
          to FastAPI later.

        </div>

      </main>

    </div>
  );
}