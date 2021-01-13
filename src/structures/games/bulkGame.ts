import { Structure } from "../../base/structure"
import type { BulkGameData } from "../../typings/data/games"

export class BulkGame extends Structure {
    constructor(data: BulkGameData) {
        super(data)
    }
}