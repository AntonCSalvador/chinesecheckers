"use client"

import { useState } from "react"
import { PlayerCard } from "./player-card"
import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import { Search } from "lucide-react"

// Define the Player type
type Player = {
  id: number
  name: string
  elo: number
  wins: number
  losses: number
  profilePicture: string
  tier?: string
}

// Mock data for the leaderboard
const initialPlayers: Player[] = [
  {
    id: 1,
    name: "Alex Johnson",
    elo: 2540,
    wins: 152,
    losses: 43,
    profilePicture: "/gojo.png",
    tier: "Grandmaster",
  },
  {
    id: 2,
    name: "Sarah Williams",
    elo: 2489,
    wins: 138,
    losses: 52,
    profilePicture: "/placeholder.svg?height=100&width=100",
    tier: "Grandmaster",
  },
  {
    id: 3,
    name: "Michael Chen",
    elo: 2412,
    wins: 121,
    losses: 48,
    profilePicture: "/placeholder.svg?height=100&width=100",
    tier: "Master",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    elo: 2387,
    wins: 115,
    losses: 62,
    profilePicture: "/placeholder.svg?height=100&width=100",
    tier: "Master",
  },
  {
    id: 5,
    name: "James Wilson",
    elo: 2356,
    wins: 108,
    losses: 59,
    profilePicture: "/placeholder.svg?height=100&width=100",
    tier: "Master",
  },
  {
    id: 6,
    name: "Olivia Martinez",
    elo: 2298,
    wins: 95,
    losses: 47,
    profilePicture: "/placeholder.svg?height=100&width=100",
    tier: "Diamond",
  },
  {
    id: 7,
    name: "Daniel Lee",
    elo: 2245,
    wins: 87,
    losses: 51,
    profilePicture: "/placeholder.svg?height=100&width=100",
    tier: "Diamond",
  },
  {
    id: 8,
    name: "Sophia Garcia",
    elo: 2187,
    wins: 76,
    losses: 43,
    profilePicture: "/placeholder.svg?height=100&width=100",
    tier: "Platinum",
  },
  {
    id: 9,
    name: "Ethan Brown",
    elo: 2134,
    wins: 68,
    losses: 39,
    profilePicture: "/placeholder.svg?height=100&width=100",
    tier: "Platinum",
  },
  {
    id: 10,
    name: "Ava Thompson",
    elo: 2089,
    wins: 62,
    losses: 41,
    profilePicture: "/placeholder.svg?height=100&width=100",
    tier: "Gold",
  },
]

export function Leaderboard() {
  const [players, setPlayers] = useState<Player[]>(initialPlayers)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  // Filter players based on search query
  const filteredPlayers = players.filter((player) => player.name.toLowerCase().includes(searchQuery.toLowerCase()))

  // Sort players by ELO
  const sortedPlayers = [...filteredPlayers].sort((a, b) => {
    return sortOrder === "desc" ? b.elo - a.elo : a.elo - b.elo
  })

  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc")
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search players..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" onClick={toggleSortOrder} className="whitespace-nowrap">
            ELO: {sortOrder === "desc" ? "High to Low" : "Low to High"}
          </Button>
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-12 bg-gray-100 p-3 font-medium text-sm text-gray-600">
        <div className="md:col-span-1 text-center">Rank</div>
        <div className="md:col-span-3">Player</div>
        <div className="md:col-span-2 text-center">ELO</div>
        <div className="md:col-span-2 text-center">Tier</div>
        <div className="md:col-span-2 text-center">W/L</div>
        <div className="md:col-span-2 text-center">Win Rate</div>
      </div>

      <div className="divide-y">
        {sortedPlayers.map((player, index) => (
          <PlayerCard key={player.id} player={player} rank={index + 1} />
        ))}
      </div>

      {sortedPlayers.length === 0 && (
        <div className="p-8 text-center text-gray-500">No players found matching your search.</div>
      )}
    </div>
  )
}
