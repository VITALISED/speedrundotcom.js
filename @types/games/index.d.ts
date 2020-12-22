declare type GameRuntimes = "realtime" | "realtime_noupload" | "ingame"

declare type GameModerators = {
    [key: string]: "moderator" | "super-moderator";
}

declare type GameImageOptions = {
    url: string,
    width: number,
    height: number,
}

declare type GameAssets = {
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

declare type GameLinks = [
    {
        rel: "self",
        url: string,
    },
    {
        rel: "runs",
        url: string,
    },
    {
        rel: "levels",
        url: string,
    },
    {
        rel: "categories",
        url: string,
    },
    {
        rel: "variables",
        url: string,
    },
    {
        rel: "records",
        url: string,
    },
    {
        rel: "series",
        url: string,
    },
    {
        rel: "base-game",
        url: string,
    } | null,
    {
        rel: "derived-games",
        url: string,
    },
    {
        rel: "romhacks",
        url: string,
    } | null,
    {
        rel: "leaderboards",
        url: string,
    },
]

declare interface GameData {
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
    created: string | null,
    assets: GameAssets,
    links: GameLinks,
}
