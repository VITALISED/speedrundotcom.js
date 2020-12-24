import { Platform } from "../structures/platforms"
import { BaseManager } from "../base/manager"

export class PlatformManager extends BaseManager {
    constructor(endpoint: string) {
        super(endpoint)
    }

    async get(id: string): Promise<Platform> {
        return new Platform(await this._fetch<PlatformData>(id))
    }
}