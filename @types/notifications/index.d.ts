declare type NotificationStatus = "read" | "unread"

declare type NotificationLink = "run" | "game"

declare type NotificationItem = "post" | "guide" | NotificationLinkType

declare interface NotificationData {
    id: string,
    created: Date,
    status: NotificationStatus,
    item: {
        rel: NotificationItem,
        uri: string
    },
    links: {
        rel: NotificationLink,
        uri: string
    }
}