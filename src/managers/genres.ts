import { Genre } from "../structures/genres"
import { BaseManager } from "../base/manager"
import { Client } from "../client"
import type { GenreData } from "../typings/data/genres"

export class GenreManager extends BaseManager {
    constructor(client: Client, endpoint: string) {
        super(client, endpoint)
    }

    get(id: string): Genre {
        return new Genre(this._fetch<GenreData>(`/${id}`))
    }
}