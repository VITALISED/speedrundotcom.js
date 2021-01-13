import { BaseManager } from "../base/manager"
import { Client } from "../client"
import { Variable } from "../structures/variables"
import { VariableData } from "../typings/data/variables"

export class VariableManager extends BaseManager {
    constructor(client: Client, endpoint: string) {
        super(client, endpoint)
    }

    get(id: string): Variable {
        return new Variable(this._fetch<VariableData>(`/${id}`))
    }
}