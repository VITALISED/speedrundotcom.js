import type { Resolvable } from "../resolvable"

export enum NotificationStatus {
    "read",
    "unread"
}

export type NotificationLink = "run" | "game"

export type NotificationItem = "post" | "guide" | NotificationLink

export interface NotificationData {
    id: string,
    created: Date,
    status: keyof NotificationStatus,
    item: {
        rel: NotificationItem,
        uri: string
    },
    links: Resolvable[]
}