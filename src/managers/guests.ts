import { Guest } from "../structures/guests"
import { BaseManager } from "../base/manager"
import { Client } from "../client"
import type { GuestData } from "../typings/data/guests"

export class GuestManager extends BaseManager {
    constructor(client: Client, endpoint: string) {
        super(client, endpoint)
    }

    get(name: string): Guest {
        return new Guest(this._fetch<GuestData>(`/${name}`))
    }
}