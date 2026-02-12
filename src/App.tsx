import "./App.css";

import { useEffect, useState } from "react";
import { GameService } from "./services/game-service";

import QueuePage from "./pages/QueuePage";
import Game from "./models/Game.model";

function App() {

  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [id] = useState<string>("00000000-0000-0000-0000-000000000000");

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      var service = new GameService();

      const result = await service.getById(id);

      if (isMounted && result) {

        result.queue(["John", "Jane", "Alice", "Bob"]);
        result.queue(["Charlie", "Diana", "Frank", "Grace"]);
        result.queue(["Hank", "Ivy", "Jack", "Ken"]);

        setGame(result);
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };

  }, [id])

  if (loading) {
    console.log("Loading...");
    return "";
  }

  if (!game) {
    console.log("Game not found");
    return "";
  }

  return <QueuePage game={game} />;
}

export default App;
