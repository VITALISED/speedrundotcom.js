import { User } from "../structures/users"
import { BaseManager } from "./base/base"

export class UserManager extends BaseManager {
    constructor(endpoint: string) {
        super(endpoint)
    }

    async get(id: string): Promise<User> {
        return new User(await this._fetch<UserData>(id))
    }
}