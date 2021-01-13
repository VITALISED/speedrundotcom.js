import { Structure } from "../base/structure"
import type { LevelData } from "../typings/data/levels"

export class Level extends Structure {
    public data: LevelData

    constructor(data: LevelData) {
        super()
        this.data = data
    }

    variables() {
        throw "unimplemented"
    }
}