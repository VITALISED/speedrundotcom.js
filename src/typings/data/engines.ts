// declare type EngineLinks = [
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

export interface EngineData {
    id: string,
    name: string,
    links: Resolvable[]
}