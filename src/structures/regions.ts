import { Structure } from "../base/structure"
import type { RegionData } from "../typings/data/regions"

export class Region extends Structure {
    public data: RegionData

    constructor(data: RegionData) {
        super()
        this.data = data
    }
}