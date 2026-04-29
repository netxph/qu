import { db, AppDb, type GameData } from "../../shared/lib/db"
import Game from "../models/Game.model";

export interface IGameRepository {
    getLastGame(): Promise<GameData | undefined>;
}

export class GameRepository implements IGameRepository {
    private _db: AppDb;

    constructor(database: AppDb = db) {
        this._db = database;
    }

    async getLastGame(): Promise<GameData | undefined> {
        await this._db.init();

        const data = await this._db.games.toCollection().first();

        if (data) {
            return new Game(data.id, data.size, data.group);
        }

        return undefined;
    }
}
