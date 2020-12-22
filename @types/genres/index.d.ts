declare type GenreLinks = [
    {
        rel: "self",
        url: string
    },
    {
        rel: "games",
        url: string
    }
]

declare interface GenreData {
    id: string,
    name: string,
    links: GenreLinks,
}