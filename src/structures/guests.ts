import { Structure } from "../base/structure"
import type { GuestData } from "../typings/data/guests"

export class Guest extends Structure { 
    public data: GuestData
    
    constructor(data: GuestData) {
        super()
        this.data = data
    }
}