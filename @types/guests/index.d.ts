declare type GuestLinks = [
    {
        rel: "self",
        url: string
    },
    {
        rel: "runs",
        url: string
    }
]

declare interface GuestData {
    name: string,
    links: GuestLinks,
}