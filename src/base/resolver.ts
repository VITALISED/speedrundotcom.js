import { Gateway } from "./gateway"

export class Resolver extends Gateway {
    //TODO: Implement resolvables :/, remember for now the 'Resolvable' class doesnt exist yet.
    private resolvable: Resolvable

    constructor(resolvable: Resolvable) {
        super()
        this.resolvable = resolvable
    }

    async resolve<T>(): Promise<T> {
        return new this.resolvable(await this._fetch(this.resolvable.data))
    }
}