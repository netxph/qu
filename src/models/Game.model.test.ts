import { expect, test } from "vitest"
import Game from "./Game.model"
import Player from "./Player.model";

test("Game WHEN initialized SHOULD assign values", () => {
  let game = new Game("1234", 2);

  expect(game.id).toBe("1234");
  expect(game.size).toBe(2);
});

test("Game WHEN initialized WITH no id SHOULD throw error", () => {
  expect(() => new Game("", 2)).toThrowError("Game id is required");
});

test("Game WHEN initialized WITH size 0 SHOULD throw error", () => {
  expect(() => new Game("1234", 0)).toThrowError("Game size must be greater than 0");
});

test("Game WHEN register WITH a player SHOULD have one player", () => {
  let game = new Game("1234", 2);
  game.register(new Player("John"));

  expect(game.players.length).toBe(1);
  expect(game.players[0].name).toBe("John");
});

test("Game WHEN queue WITH correct number of players SHOULD add a queue", () => {
  let game = new Game("1234", 2);
  game.register(new Player("John"));
  game.register(new Player("Jane"));
  game.register(new Player("Alice"));
  game.register(new Player("Bob"));

  game.queue(["John", "Jane", "Alice", "Bob"]);

  expect(game.queues.length).toBe(1);
  expect(game.queues[0].teams[0].players.length).toBe(2);
  expect(game.queues[0].teams[1].players.length).toBe(2);

  expect(game.queues[0].teams[0].players[0].name).toBe("John");
  expect(game.queues[0].teams[0].players[1].name).toBe("Jane");
  expect(game.queues[0].teams[1].players[0].name).toBe("Alice");
  expect(game.queues[0].teams[1].players[1].name).toBe("Bob");
});

test("Game WHEN queue WITH more players SHOULD add queues", () => {
  let game = new Game("1234", 2);
  game.register(new Player("John"));
  game.register(new Player("Jane"));
  game.register(new Player("Alice"));
  game.register(new Player("Bob"));
  game.register(new Player("Charlie"));
  game.register(new Player("Diana"));
  game.register(new Player("Eve"));
  game.register(new Player("Frank"));
  game.register(new Player("Grace"));
  game.register(new Player("Hank"));
  game.register(new Player("Ivy"));
  game.register(new Player("Jack"));

  game.queue(["John", "Jane", "Alice", "Bob"]);
  game.queue(["Charlie", "Diana", "Eve", "Frank"]);
  game.queue(["Grace", "Hank", "Ivy", "Jack"]);

  expect(game.queues[0].teams[0].players[0].name).toBe("John");
  expect(game.queues[0].teams[1].players[0].name).toBe("Alice");
  expect(game.queues[1].teams[0].players[0].name).toBe("Charlie");
  expect(game.queues[1].teams[1].players[0].name).toBe("Eve");
  expect(game.queues[2].teams[0].players[0].name).toBe("Grace");
  expect(game.queues[2].teams[1].players[0].name).toBe("Ivy");
});
