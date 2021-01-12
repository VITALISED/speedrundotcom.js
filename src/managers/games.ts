import { Constants } from "../constants"
import { BulkGame } from "../structures/games/bulkGame"
import { Game } from "../structures/games/games"
import { BaseManager } from "../base/manager"
import { Client } from "../client"

export class GameManager extends BaseManager {
    constructor(client: Client, endpoint: string) {
        super(client, endpoint)
    }

    get(id: string): Game {
        return new Game(this._fetch<GameData>(`/${id}`))
    }
    
    //TODO: size parameters, maybe
    getBulk(): BulkGame {
        return new BulkGame(this._fetch<BulkGameData>(Constants.BULK_GAME_ENDPOINT))
    }
}