import { Resolvable } from "../resolvable"

export enum VariableScopes {
    "global",
    "full-game",
    "all-levels",
    "single-level",
}

export interface VariableValues {
    [id: string]: {
        label: string,
        rules: string,
        flags: {
            miscellaneous: boolean,
        },
    }
}

export interface VariableData {
    id: string,
    name: string,
    category: string | null
    scope: {
        type: keyof VariableScopes
    },
    mandatory: boolean,
    user_defined: boolean,
    obsoletes: boolean,
    values: {
        values: VariableValues[],
        default: string,
    },
    is_subcategory: boolean,
    links: Resolvable[]
}