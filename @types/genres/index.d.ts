declare type GenreLinks = [
    {
        rel: "self",
        uri: string
    },
    {
        rel: "games",
        uri: string
    }
]

declare interface GenreData {
    id: string,
    name: string,
    links: GenreLinks,
}