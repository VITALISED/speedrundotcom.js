import { Structure } from "../base/structure"
import { Constants } from "../constants"
import type { PersonalBest, UserData } from "../typings/data/users"

export class User extends Structure {
    public data: UserData

    constructor(data: UserData) {
        super()
        this.data = data
    }
    //TODO: Personalbests, preferebly a clean way future me

    personalBests(): PersonalBest {
        return this._fetch(`/${Constants.USER_ENDPOINT}/${this.data.id}/personal-bests`)
    }
}