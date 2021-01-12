import { Leaderboard } from "../structures/leaderboards"
import { BaseManager } from "../base/manager"
import { Client } from "../client"

export class LeaderboardManager extends BaseManager {
    constructor(client: Client, endpoint: string) {
        super(client, endpoint)
    }

    get(game: string, category: string, level?: string): Leaderboard {
        const params = level ? `/${game}/level/${level}/${category}` : `/${game}/category/${category}`

        return new Leaderboard(this._fetch<LeaderboardData>(params))
    }
}