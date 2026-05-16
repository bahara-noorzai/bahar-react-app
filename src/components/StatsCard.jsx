export default function StatsCard({ title, value }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
          {title}
        </h2>

        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-fuchsia-500/15 text-fuchsia-300">
          ★
        </span>
      </div>

      <p className="mt-6 text-4xl font-semibold text-white">
        {value}
      </p>
    </div>
  )
}