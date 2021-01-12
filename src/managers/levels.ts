import { Level } from "../structures/levels"
import { BaseManager } from "../base/manager"
import { Client } from "../client"

export class LevelManager extends BaseManager {
    constructor(client: Client, endpoint: string) {
        super(client, endpoint)
    }

    async get(id: string): Promise<Level> {
        return new Level(await this._fetch<LevelData>(`/${id}`))
    }
}