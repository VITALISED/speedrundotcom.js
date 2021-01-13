import { Structure } from "../base/structure"
import type { NotificationData } from "../typings/data/notifications"

export class Notification extends Structure {
    constructor(data: NotificationData) {
        super(data)
    }
}