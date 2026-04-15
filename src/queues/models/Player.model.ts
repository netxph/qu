export default class Player {

  readonly name: string

  constructor(name: string) {

    if (!name) {
      throw new Error('Player name is required');
    }

    this.name = name;
  }
}
