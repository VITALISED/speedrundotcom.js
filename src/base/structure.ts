import { Gateway } from "./gateway"
import type { Resolvable } from "../typings/resolvable"

export class Structure extends Gateway {
    constructor() {
        super()
    }

    async resolve<T extends Structure> (resolvable: Resolvable): Promise<T> {
        //TODO: Somehow create something that elegantly gets the type of structure and creates it without some huge if statement. **USE THE BLOODY `rel` FIELD!!**
        throw "unimplemented"
    }
}