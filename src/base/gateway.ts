import { Constants } from "../constants"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require("node-fetch")

export class Gateway {
    endpoint: string | undefined
    token: string | undefined
    options: string | undefined

    constructor(endpoint?: string, token?: string, options?: string) {
        this.endpoint = endpoint,
        this.token = token,
        this.options = options
    }

    //TODO: Touch this up
    protected async _fetch<T>(params?: string): Promise<T> {
        let headers
        
        this.token ? 
            headers = {
                "X-API-Key": this.token,
                "Content-Type": "application/json",
                "User-Agent": "speedrundotcom.js Client"
            } :
            headers = {
                "Content-Type": "application/json",
                "User-Agent": "speedrundotcom.js Client"
            }
        
        const isParams = this._isNullStringify<string | undefined>(params)
        // This is a precaution just in case we can't call the endpoint within the constructor and plan on only use params.
        const isEndpoint = this._isNullStringify<string | undefined>(this.endpoint)

        const init: RequestInit = {
            headers: headers,
        }

        const res = await fetch(Constants.API_URL + isEndpoint + isParams, init)
        const json = await res.json()

        //TODO: Parse JSON to replace "-" with "_", cant wait to implement this for post/put/del
        return json.data
    }

    private _isNullStringify<T extends unknown>(object: T): T | "" {
        return object ? object : ""
    }

    private _parseJSON(object: any): any {
        for (const key in Object.keys(object)) {
            const newKey = key.replace("-", "_")
            object[key] = object[newKey]
        }
    }
}