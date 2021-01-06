declare enum CategoryType {
    "per_game",
    "per_level",
}

declare enum CategoryPlayer {
    "exactly",
    "up_to",
}

// declare type CategoryLinks =  [
//     {
//         rel: "self",
//         uri: string
//     },
//     {
//         rel: "games",
//         uri: string
//     },
//     {
//         rel: "variables",
//         uri: string
//     },
//     {
//         rel: "runs",
//         uri: string
//     },
// ]

declare interface CategoryData {
    id: string,
    name: string,
    weblink: string,
    type: keyof CategoryType,
    rules: string,
    players: {
        type: keyof CategoryPlayer
        value: number
    },
    miscellaneous: boolean,
    links: Resolvable[],
}