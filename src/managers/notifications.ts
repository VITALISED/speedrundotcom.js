import { Notification } from "../structures/notifications"
import { BaseManager } from "./base/base"

export class NotificiationManager extends BaseManager {
    constructor(endpoint: string, token: string) {
        super(endpoint, token)
    }

    async get(): Promise<Notification> {
        return new Notification(await this._fetch<NotificationData>())
    }
}