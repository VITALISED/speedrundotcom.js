declare type GameTypeLinks = [
    {
        rel: "self",
        url: string
    },
    {
        rel: "games",
        url: string
    }
]

declare interface GameTypeData {
    id: string,
    name: string,
    links: GameTypeLinks
}