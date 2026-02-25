import Header from "../components/Header";
import Property from "../components/Property";
import Queue from "../components/Queue";
import EmptyQueue from "../components/EmptyQueue";
import Team from "../components/Team";
import Player from "../components/Player";
import Menu from "../components/Menu";
import Game from "../models/Game.model";

interface GameProps extends React.PropsWithChildren {
  game: Game
}

export default function QueuePage({ game }: GameProps) {
  return (
    <>
      <Header group={game.group} />
      <main className="font-lato mx-auto mt-8 max-w-6xl p-6">
        <section className="flex flex-col gap-y-2">
          <Property />

          {game.queues.map((queue) => (
            <Queue key={queue.id} court="No court">
              {queue.teams.map((team) => (
                <Team key={team.id}>
                  {team.players.map((player) => (
                    <Player key={player.name} name={player.name} />
                  ))}
                </Team>
              ))}
            </Queue>
          ))}
          <EmptyQueue />
          <Menu />
        </section>
      </main>
    </>
  );
}
