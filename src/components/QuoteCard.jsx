export default function QuoteCard({ quote, onNewQuote }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-900/95 p-8 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1">
      <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-fuchsia-300">
        Inspiration
      </div>

      <p className="text-2xl font-medium leading-relaxed text-slate-100 sm:text-3xl">
        “{quote}”
      </p>

      <button
        onClick={onNewQuote}
        className="mt-8 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-[1.01] hover:brightness-110"
      >
        Generate New Quote
      </button>
    </div>
  )
}