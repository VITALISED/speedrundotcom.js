import { Structure } from "../base/structure"
import type { DeveloperData } from "../typings/data/developers"

export class Developer extends Structure {
    constructor(data: DeveloperData) {
        super(data)
    }
}