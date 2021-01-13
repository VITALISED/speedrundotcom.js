import { Level } from "../structures/levels"
import { BaseManager } from "../base/manager"
import { Client } from "../client"
import type { LevelData } from "../typings/data/levels"

export class LevelManager extends BaseManager {
    constructor(client: Client, endpoint: string) {
        super(client, endpoint)
    }

    get(id: string): Level {
        return new Level(this._fetch<LevelData>(`/${id}`))
    }
}