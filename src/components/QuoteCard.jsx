export default function QuoteCard({ quote, onNewQuote }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 transition hover:scale-[1.01] duration-300">
      <p className="text-xl italic text-gray-700 leading-relaxed">
        “{quote}”
      </p>

      <button
        onClick={onNewQuote}
        className="mt-6 bg-black text-white px-6 py-3 rounded-2xl hover:opacity-90 transition"
      >
        Generate New Quote
      </button>
    </div>
  )
}