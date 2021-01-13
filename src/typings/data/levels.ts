// declare type LevelLinks = [
//     {
//         rel: "self",
//         uri: string 
//     },
//     {
//         rel: "game",
//         uri: string
//     },
//     {
//         rel: "categories",
//         uri: string
//     },
//     {
//         rel: "variables",
//         uri: string
//     }
// ]

import type { Resolvable } from "../resolvable"

export interface LevelData {
    id: string,
    name: string,
    weblink: string,
    rules: string,
    links: Resolvable[],
}