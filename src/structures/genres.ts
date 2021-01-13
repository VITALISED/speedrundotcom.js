import { Structure } from "../base/structure"
import type { GenreData } from "../typings/data/genres"

export class Genre extends Structure {
    constructor(data: GenreData) {
        super(data)
    }
}