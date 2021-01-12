import { Notification } from "../structures/notifications"
import { BaseManager } from "../base/manager"
import { Client } from "../client"

export class NotificiationManager extends BaseManager {
    constructor(client: Client, endpoint: string, token: string) {
        super(client, endpoint, token)
    }

    get(): Notification {
        return new Notification(this._fetch<NotificationData>())
    }
}