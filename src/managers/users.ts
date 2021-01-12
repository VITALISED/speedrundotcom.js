import { User } from "../structures/users"
import { BaseManager } from "../base/manager"
import { Client } from "../client"

export class UserManager extends BaseManager {
    constructor(client: Client, endpoint: string) {
        super(client, endpoint)
    }

    get(id: string): User {
        return new User(this._fetch<UserData>(id))
    }
}