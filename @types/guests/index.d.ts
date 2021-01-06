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

declare interface GuestData {
    name: string,
    links: Resolvable[],
}