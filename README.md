# speedrundotcom.js

## WIP and no where near being finished

Speedrundotcom.js is a fresh new library on the block that's written in typescript. It's a high level API wrapper for speedrun.com with lots of cool features and all that good stuff. Forgot to write that it can also be used anonymously.

### Basic Example

```ts
import { Client } from "speedrundotcom.js"

const client = new Client({
    token: "your optional API token"
})

const someGame = client.games.get("id")

const allTheGames = client.games.getBulk()
```

If you wanna help out you can add me on Discord with **VITALISED#7081**

### Missing Coverage

- Runs
- Series
