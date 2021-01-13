import { Structure } from "../base/structure"
import type { PlatformData } from "../typings/data/platforms"

export class Platform extends Structure {
    public data: PlatformData

    constructor(data: PlatformData) {
        super()
        this.data = data
    }
}