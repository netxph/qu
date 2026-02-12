import Player from './Player.model';
import Queue from './Queue.model';
import Team from './Team.model';

export default class Game {
  readonly id: string;
  readonly size: number;
  readonly players: Player[];
  readonly queues: Queue[];

  constructor(id: string, size: number) {
    if (!id) {
      throw new Error('Game id is required');
    }

    this.id = id;

    if (size <= 0) {
      throw new Error('Game size must be greater than 0');
    }

    this.size = size;

    this.players = [];
    this.queues = [];
  }

  public register(player: Player): void {
    this.players.push(player);
  }

  public queue(players: string[]): void {

    if (players.length !== this.size * 2) {
      throw new Error('Number of players does not match the size.');
    }

    for (const name of players) {
      if (!this.getPlayer(name)) {
        throw new Error(`Player ${name} is not registered.`);
      }
    }

    let teams: Team[] = [];

    for (let i: number = 0; i < 2; i++) {

      let p: Player[] = [];

      for (let j: number = 0; j < this.size; j++) {
        p.push(this.getPlayer(players[(i * this.size) + j])!);
      }

      teams.push(new Team(i + 1, p));
    }

    const ids = this.queues.map((q) => q.id);

    const lastId = ids.length > 0 ? Math.max(...ids) : 0;

    this.queues.push(new Queue(lastId + 1, teams));
  }

  private getPlayer(name: string): Player | undefined {
    return this.players.find((p) => p.name === name);
  }

}
