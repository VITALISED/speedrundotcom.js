import { Structure } from "../../base/structure"
import type { GameData } from "../../typings/data/games"

export class Game extends Structure {    
    constructor(data: GameData) {
        super(data)
    }
}