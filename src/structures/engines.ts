import { Structure } from "../base/structure"
import type { EngineData } from "../typings/data/engines"

export class Engine extends Structure {
    public data: EngineData

    constructor(data: EngineData) {
        super()
        this.data = data
    }
}