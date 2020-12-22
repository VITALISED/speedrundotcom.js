import { Guest } from "../structures/guests"
import { BaseManager } from "./base/base"

export class GuestManager extends BaseManager {
    constructor(endpoint: string) {
        super(endpoint)
    }

    async get(name: string): Promise<Guest> {
        return new Guest(await this._fetch<GuestData>(`/${name}`))
    }
}