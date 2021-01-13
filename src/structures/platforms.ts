import { Structure } from "../base/structure"
import type { PlatformData } from "../typings/data/platforms"

export class Platform extends Structure {
    constructor(data: PlatformData) {
        super(data)
    }
}