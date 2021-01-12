import { Structure } from "../../base/structure"
import { Client } from "../../client"

export class BulkGame extends Structure {
    public data: BulkGameData

    constructor(client: Client, data: BulkGameData) {
        super(client, data)
        this.data = data
    }
}