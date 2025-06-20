import { Leaderboard } from "components/leaderboard"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">CFCY CHINESE CHECKERS RANKINGS</h1>
        <Leaderboard />
      </div>
    </main>
  )
}
