import { Structure } from "../../base/structure"
import type { BulkGameData } from "../../typings/data/games"

export class BulkGame extends Structure {
    public data: BulkGameData

    constructor(data: BulkGameData) {
        super()
        this.data = data
    }
}