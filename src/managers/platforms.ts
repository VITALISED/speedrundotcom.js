import { Platform } from "../structures/platforms"
import { BaseManager } from "../base/manager"
import { Client } from "../client"
import type { PlatformData } from "../typings/data/platforms"

export class PlatformManager extends BaseManager {
    constructor(client: Client, endpoint: string) {
        super(client, endpoint)
    }

    get(id: string): Platform {
        return new Platform(this._fetch<PlatformData>(id))
    }
}