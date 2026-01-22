import Player from './Player.model';

export default class Team {

  readonly id: number;
  readonly players: Player[];

  constructor(id: number, players: Player[]) {
    if (!players || players.length === 0) {
      throw new Error('Players are required');
    }

    this.id = id;
    this.players = players;
  }
}
