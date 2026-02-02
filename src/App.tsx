import "./App.css";
import QueuePage from "./pages/QueuePage";
import { GameService } from "./services/game-service";

function App() {

  const game = GameService.getById(crypto.randomUUID());

  //generate 3 queues

  game.queue(["John", "Jane", "Alice", "Bob"]);
  game.queue(["Charlie", "Diana", "Eve", "Frank"]);
  game.queue(["Grace", "Hank", "Ivy", "Jack"]);

  return <QueuePage game={game} />;
}

export default App;
