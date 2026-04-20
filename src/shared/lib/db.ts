import Dexie, { type EntityTable } from 'dexie';

export interface GameData {
    id: string;
    size: number;
    group: string;
}

export class AppDb extends Dexie {
    games!: EntityTable<GameData, "id">;

    constructor() {
        super("Qu");

        this.version(1).stores({
            games: "id"
        });
    }
}

export const db = new AppDb();

if (process.env.NODE_ENV === "development") {
    (window as any).db = db;
}
