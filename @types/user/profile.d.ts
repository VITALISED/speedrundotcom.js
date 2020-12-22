declare type ProfileLinks = [
    {
        rel: "self",
        uri: string
    },
    {
        rel: "runs",
        uri: string
    },
    {
        rel: "games",
        uri: string
    },
    {
        rel: "personal-bests",
        uri: string
    },
    {
        rel: "user",
        uri: string
    }
]

declare interface ProfileData extends UserData {
    links: ProfileLinks
}