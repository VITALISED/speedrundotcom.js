declare type LeaderboardTimings = "realtime" | "realtime_noloads" | "ingame"

declare type LeaderboardLinks = [
    {
        rel: "game",
        url: string
    },
    {
        rel: "category",
        url: string
    }
]

declare interface LeaderboardData {
    weblink: string,
    game: string,
    category: string,
    level: string | null,
    platform: string | null,
    region: string | null,
    emulators: boolean | null,
    video_only: boolean,
    timing: LeaderboardTimings,
    values: object,
    runs: [
        {
            place: number,
            run: RunData
        },
        {
            place: number,
            run: RunData
        },
        {
            place: number,
            run: RunData
        },
        {
            place: number,
            run: RunData
        }
    ],
}