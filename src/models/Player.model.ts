export class Player {
  constructor(
    public readonly name: string
  ) {
    if (!name) {
      throw new Error('Player name is required');
    }
  }
}
