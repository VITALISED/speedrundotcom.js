import { Structure } from "../base/structure"
import type { DeveloperData } from "../typings/data/developers"

export class Developer extends Structure {
    public data: DeveloperData

    constructor(data: DeveloperData) {
        super()
        this.data = data
    }
}