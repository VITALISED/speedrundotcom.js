export class SRAPIError extends Error {
    public status: number

    constructor(status: number, ...params: string[]) {
        super(...params)

        this.stack = new Error().stack
        this.status = status
    }
}