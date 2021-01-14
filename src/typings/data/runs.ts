import type { Resolvable } from "../resolvable"

export type RunStatusType = "new" | "verified" | "rejected"

//TODO: Conditional types for examiner and reason depending on value of enum (might change enums to union types)

export interface RunStatus<T extends RunStatusType> {
    status: T,
    examiner: T extends "new" ? never : string,
    verify_date: Date,
    reason: T extends "rejected" ? string : never,
}

export interface RunPlayers {
    rel: string,
    id: string,
    uri: string,
}
export interface RunData<T extends RunStatusType> {
    id: string,
    weblink: string,
    game: string,
    level: string | undefined,
    category: string,
    videos: {
        text: string,
        links: [{   [uri: string]: string   }],
    } | string | null,
    comment: string,
    status: RunStatus<T>,
    players: RunPlayers[],
    date: string | null,
    submitted: string | null,
    times: {
        primary: string,
        primary_t: number,
        realtime: string,
        realtime_t: number,
        realtime_noloads: string,
        realtime_noloads_t: number,
        ingame: string | null,
        ingame_t: number,
    },
    system: {
        platform: string,
        emulated: boolean,
        region: string | null,
    },
    splits: Resolvable | null,
    values: {
        [key: string]: string,
    },
    links: Resolvable[]
}