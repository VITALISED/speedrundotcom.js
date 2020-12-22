declare type PlatformLinks = [
    {
        rel: "self",
        uri: string
    },
    {

        rel: "games",
        uri: string
    },
    {
        rel: "runs",
        uri: string
    }
]

declare interface PlatformData {
    id: string,
    name: string,
    released: number,
    links: PlatformLinks,
}