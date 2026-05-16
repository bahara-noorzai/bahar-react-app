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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <Header />

        <div className="grid md:grid-cols-2 gap-6">
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
  )
}