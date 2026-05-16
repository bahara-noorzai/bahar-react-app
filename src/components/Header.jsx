export default function Header() {
  return (
    <div className="mb-10 text-center">
      <div className="mx-auto mb-4 inline-flex rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-fuchsia-300">
        Daily Focus Studio
      </div>

      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        A modern focus dashboard for your day.
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
        Built for clearer routines, better habits, and daily motivation. Every quote and statistic is curated to help you stay in flow.
      </p>
    </div>
  )
}
