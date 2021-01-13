import type { Resolvable } from "../resolvable"

export enum RunStatusEnum {
    "new" = 0,
    "verified" = 1,
    "rejected" = 2,
}

//TODO: Conditional types for examiner and reason depending on value of enum (might change enums to union types)

export interface RunStatus {
    status: keyof RunStatusEnum,
    examiner: string,
    verify_date: Date,
    reason: string,
}

export interface RunPlayers {
    rel: string,
    id: string,
    uri: string,
}

export interface RunData {
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
    status: RunStatus,
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