import Game from "../models/Game.model";
import Player from "../models/Player.model";
import type { ILogger } from "../lib/Logger";

interface PlayerData {
  name: string
}

interface TeamData {
  id: number,
  players: PlayerData[]
}

interface QueueData {
  teams: TeamData[]
}

interface GameData {
  id: string,
  size: number,
  group: string,
  players: PlayerData[],
  queues: QueueData[]
}

export class GameService {

  constructor(private readonly logger: ILogger) {
  }

  public async getById(id: string): Promise<Game> {

    this.logger.debug("Fetching /game.json");
    const response = await fetch('/game.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch game data: ${response.statusText}`);
    }

    const games: GameData[] = await response.json();
    const data = games.find(g => g.id === id);

    if (!data) {
      throw new Error(`Game with id ${id} not found`);
    }

    const game = new Game(data.id, data.size, data.group);

    data.players.map(p =>
      game.register(new Player(p.name)));

    return game;
  }
}
