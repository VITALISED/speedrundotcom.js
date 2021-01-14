import type { Resolvable } from "../resolvable"
import type { RunData, RunStatusType } from "./runs"

export enum LeaderboardTimings {
    "realtime",
    "realtime_noloads",
    "ingame",
}

// declare type LeaderboardLinks = [
//     {
//         rel: "game",
//         uri: string
//     },
//     {
//         rel: "category",
//         uri: string
//     }
// ]

export interface LeaderboardData<T extends RunStatusType> {
    weblink: string,
    game: string,
    category: string,
    level: string | null,
    platform: string | null,
    region: string | null,
    emulators: boolean | null,
    video_only: boolean,
    timing: keyof LeaderboardTimings,
    // eslint-disable-next-line @typescript-eslint/ban-types
    values: object,
    runs: [
        {
            place: number,
            run: RunData<T>
        },
        {
            place: number,
            run: RunData<T>
        },
        {
            place: number,
            run: RunData<T>
        },
        {
            place: number,
            run: RunData<T>
        }
    ],
    links: Resolvable[]
}