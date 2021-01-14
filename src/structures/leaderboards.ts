import { Structure } from "../base/structure"
import type { LeaderboardData } from "../typings/data/leaderboards"
import type { RunStatusType } from "../typings/data/runs"

export class Leaderboard<T extends RunStatusType> extends Structure {
    public data: LeaderboardData<T>

    constructor(data: LeaderboardData<T>) {
        super()
        this.data = data
    }
}