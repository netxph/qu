import Game from "../models/Game.model";
import Player from "../models/Player.model";

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
  players: PlayerData[],
  queues: QueueData[]
}


export class GameService {

  public async getById(id: string): Promise<Game> {
    const response = await fetch('/game.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch game data: ${response.statusText}`);
    }

    const games: GameData[] = await response.json();
    const data = games.find(g => g.id === id);

    if (!data) {
      throw new Error(`Game with id ${id} not found`);
    }

    const game = new Game(data.id, data.size);

    data.players.map(p =>
      game.register(new Player(p.name)));

    return game;
  }
}
