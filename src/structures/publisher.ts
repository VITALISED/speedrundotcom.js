import { Structure } from "../base/structure"
import type { PublisherData } from "../typings/data/publishers"

export class Publisher extends Structure {
    public data: PublisherData

    constructor(data: PublisherData) {
        super()
        this.data = data
    }
}