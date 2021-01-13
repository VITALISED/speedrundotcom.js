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

import type { Resolvable } from "../resolvable"

export interface GameTypeData {
    id: string,
    name: string,
    links: Resolvable[]
}