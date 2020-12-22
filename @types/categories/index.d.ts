declare type CategoryType = "per-game" | "per-level"

declare type CategoryPlayer = "exactly" | "up-to"

declare type CategoryLinks =  [
    {
        rel: "self",
        uri: string
    },
    {
        rel: "games",
        uri: string
    },
    {
        rel: "variables",
        uri: string
    },
    {
        rel: "runs",
        uri: string
    },
]

declare interface CategoryData {
    id: string,
    name: string,
    weblink: string,
    type: CategoryType,
    rules: string,
    players: {
        type: CategoryPlayer
        value: number
    },
    miscellaneous: boolean,
    links: CategoryLinks,
}