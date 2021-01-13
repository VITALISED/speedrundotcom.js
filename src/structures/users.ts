import { Structure } from "../base/structure"
import type { UserData } from "../typings/data/users"

export class User extends Structure {
    constructor(data: UserData) {
        super(data)
    }
    //TODO: Personalbests, preferebly a clean way future me
}