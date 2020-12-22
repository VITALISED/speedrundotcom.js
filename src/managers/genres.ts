import { Genre } from "../structures/genres"
import { BaseManager } from "./base/base"

export class GenreManager extends BaseManager {
    constructor(endpoint: string) {
        super(endpoint)
    }

    async get(id: string): Promise<Genre> {
        return new Genre(await this._fetch<GenreData>(`/${id}`))
    }
}