import { Constants } from "./constants"
import { CategoryManager } from "./managers/categories"
import { DeveloperManager } from "./managers/developers"
import { EngineManager } from "./managers/engines"
import { GameManager } from "./managers/games"
import { GameTypeManager } from "./managers/gameTypes"
import { GenreManager } from "./managers/genres"
import { GuestManager } from "./managers/guests"
import { LeaderboardManager } from "./managers/leaderboards"

export class Client {
    public token: string | undefined

    public games: GameManager
    public categories: CategoryManager
    public developers: DeveloperManager
    public engines: EngineManager
    public gameTypes: GameTypeManager
    public genres: GenreManager
    public guests: GuestManager
    public leaderboards: LeaderboardManager

    constructor(token?: string) {
        this.token = token

        this.games = new GameManager(Constants.GAME_ENDPOINT)
        this.categories = new CategoryManager(Constants.CATEGORY_ENDPOINT)
        this.developers = new DeveloperManager(Constants.DEVELOPER_ENDPOINT)
        this.engines = new EngineManager(Constants.ENGINE_ENDPOINT)
        this.gameTypes = new GameTypeManager(Constants.GAMETYPE_ENDPOINT)
        this.genres = new GenreManager(Constants.GENRE_ENDPOINT)
        this.guests = new GuestManager(Constants.GUEST_ENDPOINT)
        this.leaderboards =  new LeaderboardManager(Constants.LEADERBOARD_ENDPOINT)
        //TODO: Cache for managers and whatnot because this seems important for something high level like this.
        //TODO: Profile/Client user data, although that's probably gonna go under a manager maybe? Remember to extend User (when I make it) if it works.
    }
}