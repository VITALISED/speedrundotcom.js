import { Gateway } from "./gateway"

export class Structure extends Gateway {
    constructor(endpoint?: string, token?: string) {
        super(endpoint, token)
    }

    // Similar for managers, future-proofing if structures are gonna need their own specific function calls/props
}