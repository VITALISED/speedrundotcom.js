declare type DeveloperLinks = [
    {
        rel: "self",
        url: string 
    },
    {
        rel: "games",
        link: string
    }
]

declare interface DeveloperData {
    id: string,
    name: string,
    links: DeveloperLinks,
}