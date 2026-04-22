import Dexie, { type EntityTable } from 'dexie';
import { type ILogger, DefaultLogger } from "../../shared/lib/Logger";

export interface GameData {
    id: string;
    size: number;
    group: string;
}

export class AppDb extends Dexie {
    games!: EntityTable<GameData, "id">;

    constructor(private readonly logger: ILogger) {
        super("Qu");

        this.version(1).stores({
            games: "id"
        });
    }

    async init() {
        if (this.isOpen()) {
            return;
        }

        try {
            await this.open();
            this.logger.info("Database opened successfully");

            //TODO: seed goes here
        } catch (error) {
            this.logger.error("Failed to open database", error as Error);
            throw error;
        }
    }
}

export const db = new AppDb(new DefaultLogger());

if (process.env.NODE_ENV === "development") {
    (window as any).db = db;
}
