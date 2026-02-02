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


export const GameService = {

  getById: (id: string): Game => {
    const db: GameData[] = [
      {
        id: id,
        size: 2,
        players: [{
          name: "John"
        }, {
          name: "Jane"
        }, {
          name: "Alice"
        }, {
          name: "Bob"
        }, {
          name: "Charlie"
        }, {
          name: "Diana"
        }, {
          name: "Eve"
        }, {
          name: "Grace"
        }, {
          name: "Hank"
        }, {
          name: "Ivy"
        }, {
          name: "Jack"
        }
        ],
        queues: []
      }
    ]

    const data = db[0]

    const game = new Game(data.id, data.size);

    data.players.map(p =>
      game.register(new Player(p.name)));

    return game;
  }
}
