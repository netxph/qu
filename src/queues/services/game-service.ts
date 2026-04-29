import Game from "../models/Game.model";
import Player from "../models/Player.model";
import type { IGameRepository } from "../repositories/Game.repository";
import type { ILogger } from "../../shared/lib/Logger";

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

export default class GameService {

  constructor(
    private readonly repository: IGameRepository, 
    private readonly logger: ILogger) {
  }

  GetLast(): Game {
    return new Game("game-1", 2, "Group A");
  }

}
