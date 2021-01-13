// declare type GuestLinks = [
//     {
//         rel: "self",
//         uri: string
//     },
//     {
//         rel: "runs",
//         uri: string
//     }
// ]

import { Resolvable } from "../resolvable"

export interface GuestData {
    name: string,
    links: Resolvable[],
}