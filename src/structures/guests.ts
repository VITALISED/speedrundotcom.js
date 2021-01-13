import { Structure } from "../base/structure"
import type { GuestData } from "../typings/data/guests"

export class Guest extends Structure {    
    constructor(data: GuestData) {
        super(data)
    }
}