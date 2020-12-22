import { Constants } from "../constants";
import { BulkGame } from "../structures/games/bulkGame";
import { Game } from "../structures/games/games";
import { BaseManager } from "./base";

export class GameManager extends BaseManager {
    constructor(endpoint: string) {
        super(endpoint)
    }

    async get(id: string): Promise<Game> {
        return new Game(await this._fetch<GameData>(`/${id}`))
    }
    
    //TODO: size parameters, maybe
    async getBulk() {
        return new BulkGame(await this._fetch<BulkGameData>(Constants.BULK_GAME_ENDPOINT))
    }
}