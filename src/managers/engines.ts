import { BaseManager } from "./base";
import { Engine } from "../structures/engines"

export class EngineManager extends BaseManager {
    constructor(endpoint: string) {
        super(endpoint)
    }

    async get(id: string): Promise<Engine> {
        return new Engine(await this._fetch<EngineData>(`/${id}`))
    }
}