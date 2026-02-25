import "./App.css";

import { useEffect, useState } from "react";
import { GameService } from "./services/game-service";

import QueuePage from "./pages/QueuePage";
import Game from "./models/Game.model";

function App() {

  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [id] = useState<string>("e4f8d5a1-7c2a-4b9d-8e1f-3a6c2b9e4a1d");

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      var service = new GameService();

      const result = await service.getById(id);

      if (isMounted && result) {

        //place special initialization here for game object

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
