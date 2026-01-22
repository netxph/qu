import "./App.css";
import Game from "./models/Game.model.ts";
import Player from "./models/Player.model.ts";
import QueuePage from "./pages/QueuePage";

function App() {

  var game = new Game(crypto.randomUUID(), 2);

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

  //generate 3 queues

  game.queue(["John", "Jane", "Alice", "Bob"]);
  game.queue(["Charlie", "Diana", "Eve", "Frank"]);
  game.queue(["Grace", "Hank", "Ivy", "Jack"]);

  return <QueuePage game={game} />;
}

export default App;
