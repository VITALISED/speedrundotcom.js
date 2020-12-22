declare type EngineLinks = [
    {
        rel: "self",
        uri: string
    },
    {
        rel: "games",
        uri: string
    }
]

declare interface EngineData {
    id: string,
    name: string,
    links: EngineLinks
}