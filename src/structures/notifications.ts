import { Structure } from "../base/structure"
import type { NotificationData } from "../typings/data/notifications"

export class Notification extends Structure {
    public data: NotificationData

    constructor(data: NotificationData) {
        super()
        this.data = data
    }
}