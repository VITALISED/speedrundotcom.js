import { BaseManager } from "../base/manager"
import { Client } from "../client"
import { Developer } from "../structures/developers"

export class DeveloperManager extends BaseManager {
    constructor(client: Client,endpoint: string) {
        super(client, endpoint)
    }

    get(id: string): Developer {
        return new Developer(this._fetch<DeveloperData>(`/${id}`))
    }
}