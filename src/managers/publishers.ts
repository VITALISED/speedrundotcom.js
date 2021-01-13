import { BaseManager } from "../base/manager"
import { Client } from "../client"
import { Publisher } from "../structures/publisher"
import type { PublisherData } from "../typings/data/publishers"

export class PublisherManager extends BaseManager {
    constructor(client: Client, endpoint: string) {
        super(client, endpoint)
    }

    get(id: string): Publisher {
        return new Publisher(this._fetch<PublisherData>(`/${id}`))
    }
}