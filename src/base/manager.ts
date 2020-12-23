import { Gateway } from "./gateway"

export class BaseManager extends Gateway {
    constructor(endpoint?: string, token?: string, options?: string) {
        super(endpoint, token, options)
    }
    // In the future, manager specific functions/props can exist here, this seems better anyway.
}