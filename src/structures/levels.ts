import { Structure } from "../base/structure"
import type { LevelData } from "../typings/data/levels"

export class Level extends Structure {
    constructor(data: LevelData) {
        super(data)
    }
}