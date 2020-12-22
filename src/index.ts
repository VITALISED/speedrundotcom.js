import { Client } from "./client"

// The basic stuff
export * from "./client"
export * from "./constants"

// Structures
export * from "./structures/categories"
export * from "./structures/developers"
export * from "./structures/engines"
export * from "./structures/gameTypes"
export * from "./structures/games/bulkGame"
export * from "./structures/games/games"
export * from "./structures/genres"
export * from "./structures/guests"
export * from "./structures/leaderboards"
export * from "./structures/levels"
export * from "./structures/notifications"

// Managers
export * from "./managers/base/base"
export * from "./managers/categories"
export * from "./managers/developers"
export * from "./managers/engines"
export * from "./managers/gameTypes"
export * from "./managers/games"
export * from "./managers/genres"
export * from "./managers/guests"
export * from "./managers/leaderboards"
export * from "./managers/levels"
export * from "./managers/notifications"

const client = new Client()

const doathing = async () => {
    console.log(await client.games.getBulk())
}

doathing()