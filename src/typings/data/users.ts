import type { Resolvable } from "../resolvable"

export type UsernameStyleSolid = {
    style: "solid",
    color: {
        light: string,
        dark: string,
    }
}

export type UsernameStyleGradient = {
    style: "gradient"
    color_from: {
        light: string,
        dark: string,
    },
    color_to: {
        light: string,
        dark: string,
    }
}

export enum UserRole {
    "banned",
    "user",
    "trusted",
    "moderator",
    "admin",
    "programmer",
}

// declare type UserLinks = [
//     {
//         rel: "self",
//         uri: string
//     },
//     {
//         rel: "runs",
//         uri: string
//     },
//     {
//         rel: "games",
//         uri: string
//     },
//     {
//         rel: "personal-bests",
//         uri: string
//     }
// ]

export interface UserData {
    id: string,
    name: {
        international: string,
        japanese: string | null,
    },
    weblink: string,
    name_style: UsernameStyleGradient | UsernameStyleSolid,
    role: keyof UserRole,
    signup: Date | null,
    location: {
        country: {
            code: string,
            names: {
                international: string,
                japanese: string
            }
        }
        region: {
            code: string,
            names: {
                international: string,
                japanese: string
            }
        } | null
    } | null,
    twitch: {
        uri: string | null
    },
    hitbox: {
        uri: string | null
    },
    youtube: {
        uri: string | null
    },
    twitter: {
        uri: string | null
    },
    speedrunslive: {
        uri: string | null
    }
    links: Resolvable[]
}