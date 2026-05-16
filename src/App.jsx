import { useState } from 'react'

import Header from './components/Header'
import QuoteCard from './components/QuoteCard'
import StatsCard from './components/StatsCard'

import quotes from './data/quotes'

export default function App() {
  const getRandomQuote = () => {
    const index = Math.floor(Math.random() * quotes.length)
    return quotes[index]
  }

  const [quote, setQuote] = useState(getRandomQuote())

  const generateQuote = () => {
    setQuote(getRandomQuote())
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 px-4 py-12">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-10">
          <Header />

        <div className="grid gap-6 lg:grid-cols-[1.65fr_1fr]">
          <div>
            <QuoteCard
              quote={quote}
              onNewQuote={generateQuote}
            />
          </div>

          <div className="grid gap-6">
            <StatsCard
              title="Focus Time"
              value="2h 15m"
            />

            <StatsCard
              title="Tasks Completed"
              value="5"
            />

            <StatsCard
              title="Current Streak"
              value="7 Days"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}