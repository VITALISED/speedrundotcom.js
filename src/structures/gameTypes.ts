import { Structure } from "../base/structure"
import type { GameTypeData } from "../typings/data/gameTypes"

export class GameType extends Structure {
    constructor(data: GameTypeData) {
        super(data)
    }
}