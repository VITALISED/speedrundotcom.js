import { BaseManager } from "../base/manager"
import { Client } from "../client"
import { Engine } from "../structures/engines"

export class EngineManager extends BaseManager {
    constructor(client: Client, endpoint: string) {
        super(client, endpoint)
    }

    get(id: string): Engine {
        return new Engine(this._fetch<EngineData>(`/${id}`))
    }
}