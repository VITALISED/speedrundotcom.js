// declare type GameTypeLinks = [
//     {
//         rel: "self",
//         uri: string
//     },
//     {
//         rel: "games",
//         uri: string
//     }
// ]

declare interface GameTypeData {
    id: string,
    name: string,
    links: Resolvable[]
}