import { Structure } from "../../base/structure"
import { Constants } from "../../constants"
import type { PersonalBestData, UserData } from "../../typings/data/users"
import { PersonalBest } from "./personalBests"

export class User extends Structure {
    public data: UserData

    constructor(data: UserData) {
        super()
        this.data = data
    }

    personalBests<T extends never>(): PersonalBest<T> {
        return this._fetch(`/${Constants.USER_ENDPOINT}/${this.data.id}/personal-bests`)
    }
}