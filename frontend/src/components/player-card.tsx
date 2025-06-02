import { Badge } from "components/ui/badge"

type Player = {
  id: number
  name: string
  elo: number
  wins: number
  losses: number
  profilePicture: string
  tier?: string
}

type PlayerCardProps = {
  player: Player
  rank: number
}

export function PlayerCard({ player, rank }: PlayerCardProps) {
  const totalGames = player.wins + player.losses
  const winRate = totalGames > 0 ? Math.round((player.wins / totalGames) * 100) : 0

  // Determine badge color based on rank
  const getBadgeVariant = () => {
    if (rank === 1) return "destructive"
    if (rank === 2) return "secondary"
    if (rank === 3) return "default"
    return "outline"
  }

  // Determine tier color
  const getTierColor = (tier?: string) => {
    switch (tier) {
      case "Grandmaster":
        return "text-purple-600"
      case "Master":
        return "text-red-600"
      case "Diamond":
        return "text-blue-500"
      case "Platinum":
        return "text-teal-500"
      case "Gold":
        return "text-yellow-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="grid grid-cols-12 items-center p-3 hover:bg-gray-50 transition-colors">
      {/* Rank */}
      <div className="col-span-2 md:col-span-1 flex justify-center">
        <Badge variant={getBadgeVariant()} className="w-8 h-8 rounded-full flex items-center justify-center">
          {rank}
        </Badge>
      </div>

      {/* Player Info */}
      <div className="col-span-10 md:col-span-3 flex items-center gap-3">
        <div className="relative h-10 w-10 rounded-full overflow-hidden border">
          <img src={player.profilePicture || "/gojo.png"} alt={player.name} className="object-cover fill" />
        </div>
        <div className="font-medium truncate">{player.name}</div>
      </div>

      {/* ELO */}
      <div className="col-span-4 md:col-span-2 text-center font-bold mt-2 md:mt-0">{player.elo}</div>

      {/* Tier */}
      <div className={`col-span-8 md:col-span-2 text-center mt-2 md:mt-0 ${getTierColor(player.tier)}`}>
        {player.tier || "Unranked"}
      </div>

      {/* Win/Loss */}
      <div className="col-span-6 md:col-span-2 text-center mt-2 md:mt-0">
        <span className="text-green-600">{player.wins}</span>
        <span className="text-gray-400 mx-1">/</span>
        <span className="text-red-600">{player.losses}</span>
      </div>

      {/* Win Rate */}
      <div className="col-span-6 md:col-span-2 text-center mt-2 md:mt-0">
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${winRate}%` }}></div>
        </div>
        <div className="text-xs text-gray-600">{winRate}%</div>
      </div>
    </div>
  )
}
