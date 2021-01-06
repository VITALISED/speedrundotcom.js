declare enum NotificationStatus {
    "read",
    "unread"
}

// declare type NotificationLink = "run" | "game"

declare type NotificationItem = "post" | "guide" | NotificationLink

declare interface NotificationData {
    id: string,
    created: Date,
    status: keyof NotificationStatus,
    item: {
        rel: NotificationItem,
        uri: string
    },
    links: Resolvable[]
}