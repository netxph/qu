import Team from "./Team.model";

export default class Queue {

  readonly teams: Team[];
  readonly id: number;

  constructor(id: number, teams: Team[]) {
    if (!teams || teams.length === 0) {
      throw new Error('Teams are required');
    }

    this.id = id;
    this.teams = teams;
  }
}
