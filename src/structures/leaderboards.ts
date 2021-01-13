import { Structure } from "../base/structure"
import type { LeaderboardData } from "../typings/data/leaderboards"

export class Leaderboard extends Structure {
    public data: LeaderboardData

    constructor(data: LeaderboardData) {
        super()
        this.data = data
    }
}