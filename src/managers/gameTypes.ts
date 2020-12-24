import { GameType } from "../structures/gameTypes"
import { BaseManager } from "../base/manager"

export class GameTypeManager extends BaseManager {
    constructor(endpoint: string) {
        super(endpoint)
    }

    async get(id: string): Promise<GameType> {
        return new GameType(await this._fetch<GameTypeData>(`/${id}`))
    }
}