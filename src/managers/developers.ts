import { BaseManager } from "./base/base"
import { Developer } from "../structures/developers"

export class DeveloperManager extends BaseManager {
    constructor(endpoint: string) {
        super(endpoint)
    }

    async get(id: string): Promise<Developer> {
        return new Developer(await this._fetch<DeveloperData>(`/${id}`))
    }
}