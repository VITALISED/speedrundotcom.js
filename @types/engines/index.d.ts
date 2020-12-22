declare type EngineLinks = [
    {
        rel: "self",
        url: string
    },
    {
        rel: "games",
        url: string
    }
]

declare interface EngineData {
    id: string,
    name: string,
    links: EngineLinks
}