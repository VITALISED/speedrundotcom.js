import { Structure } from "../base/structure"
import type { EngineData } from "../typings/data/engines"

export class Engine extends Structure {
    constructor(data: EngineData) {
        super(data)
    }
}