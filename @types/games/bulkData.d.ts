declare interface BulkGameData {
    id: string,
    names: {
        international: string,
        japanese: string | null
    },
    abbreviation: string,
    weblink: string,
}