# speedrundotcom.js

## WIP and no where near being finished

Speedrundotcom.js is a fresh new library on the block that's written in typescript. It's a high level API wrapper for speedrun.com with lots of cool features and all that good stuff.

### Basic Example

```ts
import { Client } from "speedrundotcom.js"

const client = new Client(/*optional API token here :)*/)

const someGame = client.games.get("id")

const allTheGames = client.games.getBulk()
```

If you wanna help out you can add me on Discord with **VITALISED#7081**

### Missing Coverage

- Runs
- Profile
- Series
- Publishers
