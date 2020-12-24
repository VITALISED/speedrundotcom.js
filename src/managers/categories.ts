import { BaseManager } from "../base/manager"
import { Category } from "../structures/categories"

export class CategoryManager extends BaseManager {
    constructor(endpoint: string) {
        super(endpoint)
    }

    async get(id: string): Promise<Category> {
        return new Category(await this._fetch<CategoryData>(`/${id}`))
    }
}