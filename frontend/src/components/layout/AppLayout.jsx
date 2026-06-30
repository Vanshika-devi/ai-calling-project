import Sidebar from "./Sidebar";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <main className="flex-1 overflow-y-auto">

        <div className="max-w-7xl mx-auto px-8 py-8">
          {children}
        </div>

      </main>

    </div>
  );
}