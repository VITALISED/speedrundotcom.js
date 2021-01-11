export class SRAPIError extends Error {
    public status: number

    constructor(status: number, ...params: string[]) {
        super(...params)

        if(Error.captureStackTrace) {
            Error.captureStackTrace(this, SRAPIError)
        }

        this.status = status
    }
}