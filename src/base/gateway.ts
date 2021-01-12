import { Client } from "../client"
import { Constants } from "../constants"
import { SRAPIError } from "../error"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require("node-fetch")

export class Gateway {
    client: Client
    endpoint: string | undefined
    token: string | undefined
    options: string | undefined

    constructor(client: Client, endpoint?: string, token?: string, options?: string) {
        this.client = client
        this.endpoint = endpoint,
        this.token = token,
        this.options = options
    }

    //TODO: Touch this up
    protected _fetch<T>(params?: string): T {
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
        
        const parsedParams = this._nullStringify<string | undefined>(params)
        // This is a precaution just in case we can't call the endpoint within the constructor and plan on only use params.
        const parsedEndpoint = this._nullStringify<string | undefined>(this.endpoint)

        const init: RequestInit = {
            headers: headers,
        }

        
        const res = fetch(Constants.API_URL + parsedEndpoint + parsedParams, init)
            .then((response: { json: () => T }) => {
                if (res.message) {
                    throw new SRAPIError(res.status, res.message)
                }

                return response.json()
            }).then((json: { data: T}) => {
                return json.data
            })

        return res
    }

    private _nullStringify<T extends unknown>(object: T): T | "" {
        return object ? object : ""
    }

    private _parseJSON(object: any): any {
        for (const key in Object.keys(object)) {
            const newKey = key.replace("-", "_")
            object[key] = object[newKey]
        }
    }
}