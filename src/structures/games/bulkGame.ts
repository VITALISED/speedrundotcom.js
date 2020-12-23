import { Structure } from "../../base/structure"

export class BulkGame extends Structure {
    public data: BulkGameData

    constructor(data: BulkGameData) {
        super()
        this.data = data
    }
}