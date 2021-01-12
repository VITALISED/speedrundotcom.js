import { BaseManager } from "../base/manager"
import { Client } from "../client"
import { Category } from "../structures/categories"

export class CategoryManager extends BaseManager {
    constructor(client: Client, endpoint: string) {
        super(client, endpoint)
    }

    get(id: string): Category {
        return new Category(this._fetch<CategoryData>(`/${id}`))
    }
}