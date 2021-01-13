import { Structure } from "../base/structure"
import type { GameTypeData } from "../typings/data/gameTypes"

export class GameType extends Structure {
    public data: GameTypeData

    constructor(data: GameTypeData) {
        super()
        this.data = data
    }
}