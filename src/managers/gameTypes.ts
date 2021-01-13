import { GameType } from "../structures/gameTypes"
import { BaseManager } from "../base/manager"
import { Client } from "../client"
import type { GameTypeData } from "../typings/data/gameTypes"

export class GameTypeManager extends BaseManager {
    constructor(client: Client, endpoint: string) {
        super(client, endpoint)
    }

    get(id: string): GameType {
        return new GameType(this._fetch<GameTypeData>(`/${id}`))
    }
}