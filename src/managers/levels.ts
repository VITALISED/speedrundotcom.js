import { Level } from "../structures/levels"
import { BaseManager } from "./base/base"

export class LevelManager extends BaseManager {
    constructor(endpoint: string) {
        super(endpoint)
    }

    async get(id: string): Promise<Level> {
        return new Level(await this._fetch<LevelData>(`/${id}`))
    }
}