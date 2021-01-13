import { Client } from "../client"
import { Gateway } from "./gateway"

export class BaseManager extends Gateway {
    public client: Client

    constructor(client: Client, endpoint?: string, token?: string, options?: string) {
        super(endpoint, token, options)

        this.client = client
    }
    // In the future, manager specific functions/props can exist here, this seems better anyway.

    //TODO: refractor GET/PUT/PATCH/DELETE generic methods here
}