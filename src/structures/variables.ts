import { Structure } from "../base/structure"
import type { VariableData } from "../typings/data/variables"

export class Variable extends Structure {
    public data: VariableData

    constructor(data: VariableData) {
        super()
        this.data = data
    }
}