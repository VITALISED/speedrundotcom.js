import { Constants } from "../constants"
const fetch = require("node-fetch")

export class BaseManager {
    endpoint: string
    token: string | undefined

    constructor(endpoint: string, token?: string) {
        this.endpoint = endpoint,
        this.token = token
    }

    protected async _fetch<T>(params?: string): Promise<T> {
        let headers;
        
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
        
        const isParams = params ? params : ""

        const init: RequestInit = {
            headers: headers,
        }

        const res = await fetch(Constants.API_URL + this.endpoint + isParams, init)
        const json = await res.json()

        return json.data
    }
}