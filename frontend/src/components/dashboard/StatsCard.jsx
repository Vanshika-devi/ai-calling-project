export default function StatsCard({
  title,
  value
}) {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

      <h3 className="text-gray-400">
        {title}
      </h3>

      <h2 className="text-3xl font-bold mt-4">
        {value}
      </h2>

    </div>
  );
}