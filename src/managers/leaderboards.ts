import { Leaderboard } from "../structures/leaderboards"
import { BaseManager } from "./base/base"

export class LeaderboardManager extends BaseManager {
    constructor(endpoint: string) {
        super(endpoint)
    }

    async get(game: string, category: string, level?: string): Promise<Leaderboard> {
        const params = level ? `/${game}/level/${level}/${category}` : `/${game}/category/${category}`

        return new Leaderboard(await this._fetch<LeaderboardData>(params))
    }
}