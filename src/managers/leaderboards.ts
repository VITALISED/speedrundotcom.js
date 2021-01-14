import { Leaderboard } from "../structures/leaderboards"
import { BaseManager } from "../base/manager"
import { Client } from "../client"
import type { LeaderboardData } from "../typings/data/leaderboards"

export class LeaderboardManager extends BaseManager {
    constructor(client: Client, endpoint: string) {
        super(client, endpoint)
    }

    get(game: string, category: string, level?: string): Leaderboard<never> {
        // This checks whether a level is provided
        const params = level ? `/${game}/level/${level}/${category}` : `/${game}/category/${category}`

        return new Leaderboard(this._fetch<LeaderboardData<never>>(params))
    }
}