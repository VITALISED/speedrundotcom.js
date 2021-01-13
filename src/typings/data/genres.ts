import type { Resolvable } from "../resolvable"

// declare type GenreLinks = [
//     {
//         rel: "self",
//         uri: string
//     },
//     {
//         rel: "games",
//         uri: string
//     }
// ]

export interface GenreData {
    id: string,
    name: string,
    links: Resolvable[],
}