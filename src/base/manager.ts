import { Client } from "../client"
import { Gateway } from "./gateway"

export class BaseManager extends Gateway {
    constructor(client: Client, endpoint?: string, token?: string, options?: string) {
        super(client, endpoint, token, options)
    }
    // In the future, manager specific functions/props can exist here, this seems better anyway.
}