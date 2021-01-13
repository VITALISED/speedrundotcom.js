import type { Resolvable } from "../resolvable"

export type GameRuntimes = "realtime" | "realtime_noupload" | "ingame"

export type GameModerators = {
    [key: string]: "moderator" | "super-moderator";
}

export type GameImageOptions = {
    url: string,
    width: number,
    height: number,
}

export type GameAssets = {
    logo: GameImageOptions,
    cover_tiny: GameImageOptions,
    cover_small: GameImageOptions,
    cover_medium: GameImageOptions,
    cover_large: GameImageOptions,
    icon: GameImageOptions,
    trophy_first: GameImageOptions,
    trophy_second: GameImageOptions,
    trophy_third: GameImageOptions,
    trophy_fourth: GameImageOptions | null,
    background: GameImageOptions | null,
    foreground: GameImageOptions | null,
}

// declare type GameLinks = [
//     {
//         rel: "self",
//         uri: string,
//     },
//     {
//         rel: "runs",
//         uri: string,
//     },
//     {
//         rel: "levels",
//         uri: string,
//     },
//     {
//         rel: "categories",
//         uri: string,
//     },
//     {
//         rel: "variables",
//         uri: string,
//     },
//     {
//         rel: "records",
//         uri: string,
//     },
//     {
//         rel: "series",
//         uri: string,
//     },
//     {
//         rel: "base-game",
//         uri: string,
//     } | null,
//     {
//         rel: "derived-games",
//         uri: string,
//     },
//     {
//         rel: "romhacks",
//         uri: string,
//     } | null,
//     {
//         rel: "leaderboards",
//         uri: string,
//     },
// ]

export interface BulkGameData {
    id: string,
    names: {
        international: string,
        japanese: string | null
    },
    abbreviation: string,
    weblink: string,
}

export interface GameData {
    id: string,
    names: {
        international: string,
        japanese: string | null,
        twitch: string,
    },
    weblink: string,
    released: string,
    released_date: string,
    ruleset: {
        show_milliseconds: boolean,
        require_verification: boolean,
        require_video: boolean,
        run_times: GameRuntimes[],
        default_time: GameRuntimes,
        emulators_allowed: boolean,
    },
    romhack: boolean,
    gametypes: string[] | null,
    platforms: string[] | null,
    genres: string[] | null,
    engines: string[] | null,
    developers: string[] | null,
    publishers: string[] | null,
    moderators: GameModerators,
    created: Date | null,
    assets: GameAssets,
    links: Resolvable[],
}
