import type { Resolvable } from "../resolvable"

export interface CategoryData {
    id: string,
    name: string,
    weblink: string,
    type: keyof CategoryType,
    rules: string,
    players: {
        type: keyof CategoryPlayer
        value: number
    },
    miscellaneous: boolean,
    links: Resolvable[],
}

declare enum CategoryType {
    "per_game",
    "per_level",
}

declare enum CategoryPlayer {
    "exactly",
    "up_to",
}