import { Structure } from "../base/structure"
import type { CategoryData } from "../typings/data/categories"

export class Category extends Structure {
    constructor(data: CategoryData) {
        super(data)
    }
}