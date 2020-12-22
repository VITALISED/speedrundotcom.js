declare type DeveloperLinks = [
    {
        rel: "self",
        uri: string 
    },
    {
        rel: "games",
        uri: string
    }
]

declare interface DeveloperData {
    id: string,
    name: string,
    links: DeveloperLinks,
}