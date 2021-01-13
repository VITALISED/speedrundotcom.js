import { Structure } from "../base/structure"
import type { CategoryData } from "../typings/data/categories"

export class Category extends Structure {
    public data: CategoryData

    constructor(data: CategoryData) {
        super()
        this.data = data
    }

    variables() {
        throw "unimplemented"
    }
}