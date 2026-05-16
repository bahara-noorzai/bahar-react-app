export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition">
      <h2 className="text-sm font-semibold text-gray-500">
        {title}
      </h2>

      <p className="text-3xl font-bold mt-3 text-gray-800">
        {value}
      </p>
    </div>
  )
}