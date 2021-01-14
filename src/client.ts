import { Gateway } from "./base/gateway"
import { Constants } from "./constants"
import { CategoryManager } from "./managers/categories"
import { DeveloperManager } from "./managers/developers"
import { EngineManager } from "./managers/engines"
import { GameManager } from "./managers/games"
import { GameTypeManager } from "./managers/gameTypes"
import { GenreManager } from "./managers/genres"
import { GuestManager } from "./managers/guests"
import { LeaderboardManager } from "./managers/leaderboards"
import { LevelManager } from "./managers/levels"
import { PlatformManager } from "./managers/platforms"
import { PublisherManager } from "./managers/publishers"
import { RegionManager } from "./managers/regions"
import { UserManager } from "./managers/users"
import { User } from "./structures/users"
import type { ClientOptions } from "./typings/client"

export class Client extends Gateway {
    public token: string | undefined
    public pageSize: number | undefined

    public games: GameManager
    public categories: CategoryManager
    public developers: DeveloperManager
    public engines: EngineManager
    public gameTypes: GameTypeManager
    public genres: GenreManager
    public guests: GuestManager
    public leaderboards: LeaderboardManager
    public levels: LevelManager
    public platforms: PlatformManager
    public users: UserManager
    public publishers: PublisherManager
    public regions: RegionManager

    constructor(options?: ClientOptions) {
        super()
        this.token = options?.token
        this.pageSize = options?.pageSize

        this.games = new GameManager(this, Constants.GAME_ENDPOINT)
        this.categories = new CategoryManager(this, Constants.CATEGORY_ENDPOINT)
        this.developers = new DeveloperManager(this, Constants.DEVELOPER_ENDPOINT)
        this.engines = new EngineManager(this, Constants.ENGINE_ENDPOINT)
        this.gameTypes = new GameTypeManager(this, Constants.GAMETYPE_ENDPOINT)
        this.genres = new GenreManager(this, Constants.GENRE_ENDPOINT)
        this.guests = new GuestManager(this, Constants.GUEST_ENDPOINT)
        this.leaderboards =  new LeaderboardManager(this, Constants.LEADERBOARD_ENDPOINT)
        this.levels = new LevelManager(this, Constants.LEVEL_ENDPOINT)
        this.platforms = new PlatformManager(this, Constants.PLATFORM_ENDPOINT)
        this.users = new UserManager(this, Constants.USER_ENDPOINT)
        this.publishers = new PublisherManager(this, Constants.PUBLISHER_ENDPOINT)
        this.regions = new RegionManager(this, Constants.REGION_ENDPOINT)
    }

    get profile(): User {
        return new User(this._fetch(Constants.PROFILE_ENDPOINT))
    }
}