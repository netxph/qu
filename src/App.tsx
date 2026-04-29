import "./App.css";
import QueuePage from "./shared/pages/QueuePage";
import Game from "./queues/models/Game.model";
import GameService from "./queues/services/game-service";
import { GameRepository } from "./queues/repositories/Game.repository";
import { DefaultLogger } from "./shared/lib/Logger";

export function App() {

  var service = new GameService(
    new GameRepository(), 
    new DefaultLogger());

  const game = service.GetLast();

  return <QueuePage game={game} />;
}

export default App;
