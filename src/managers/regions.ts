import { BaseManager } from "../base/manager"
import { Client } from "../client"
import { Region } from "../structures/regions"
import type { RegionData } from "../typings/data/regions"

export class RegionManager extends BaseManager {
    constructor(client: Client, endpoint: string) {
        super(client, endpoint)
    }

    get(id: string): Region {
        return new Region(this._fetch<RegionData>(`/${id}`))
    }
}