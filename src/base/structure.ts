import { Gateway } from "./gateway"
import type { Resolvable } from "../typings/resolvable"
import type { StructureData } from "../typings/structure"

export class Structure extends Gateway {
    public data: StructureData

    constructor(data: StructureData, endpoint?: string, token?: string) {
        super(endpoint, token)
        this.data = data
    }

    async resolve<T extends Structure> (resolvable: Resolvable): Promise<T> {
        //TODO: Somehow create something that elegantly gets the type of structure and creates it without some huge if statement. **USE THE BLOODY `rel` FIELD!!**
        throw "unimplemented"
    }
}