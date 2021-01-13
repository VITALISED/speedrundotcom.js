import { Structure } from "../base/structure"
import type { GenreData } from "../typings/data/genres"

export class Genre extends Structure {
    public data: GenreData

    constructor(data: GenreData) {
        super()
        this.data = data
    }
}