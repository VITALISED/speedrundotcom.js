// declare type PlatformLinks = [
//     {
//         rel: "self",
//         uri: string
//     },
//     {
//         rel: "games",
//         uri: string
//     },
//     {
//         rel: "runs",
//         uri: string
//     }
// ]

import type { Resolvable } from "../resolvable"

export interface PlatformData {
    id: string,
    name: string,
    released: number,
    links: Resolvable[],
}