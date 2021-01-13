import { Structure } from "../../base/structure"
import type { GameData } from "../../typings/data/games"

export class Game extends Structure {    
    public data: GameData

    constructor(data: GameData) {
        super()
        this.data = data
    }

    variables() {
        throw "unimplemented"
    }
}