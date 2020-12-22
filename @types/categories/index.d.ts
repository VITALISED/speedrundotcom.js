declare type CategoryType = "per-game" | "per-level"

declare type CategoryPlayer = "exactly" | "up-to"

declare type CategoryLinks =  [
    {
        rel: "self",
        url: string
    },
    {
        rel: "games",
        url: string
    },
    {
        rel: "variables",
        url: string
    },
    {
        rel: "runs",
        url: string
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