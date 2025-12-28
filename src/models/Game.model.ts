import { Player } from './Player.model';

export class Game {
  constructor(
    public readonly id: string,
    public readonly size: number,
    public readonly courts: number
  ) {
    if (!id) {
      throw new Error('Game id is required');
    }

    if (size <= 0) {
      throw new Error('Game size must be greater than 0');
    }

    if (courts <= 0) {
      throw new Error('Number of courts must be greater than 0');
    }
  }

  public addPlayer(player: Player): void {
    if (!player) {
      throw new Error('Player is required');
    }
  }
}
