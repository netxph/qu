import Header from '../components/Header'
import Property from '../components/Property'
import Queue from '../components/Queue'
import EmptyQueue from '../components/EmptyQueue'
import Team from '../components/Team'
import Player from '../components/Player'
import Menu from '../components/Menu'

const data = [
  {
    "court": "Court 1",
    "teams": [
      {
        "id": 1,
        "players": [
          { "name": "Alice J." },
          { "name": "Bob K." }
        ]
      },
      {
        "id": 2,
        "players": [
          { "name": "Charlie L." },
          { "name": "Dana M." }
        ]
      }
    ]
  },
  {
    "court": "Court 2",
    "teams": [
      {
        "id": 1,
        "players": [
          { "name": "Ethan N." },
          { "name": "Fiona O." }
        ]
      },
      {
        "id": 2,
        "players": [
          { "name": "George P." },
          { "name": "Hannah Q." }
        ]
      }
    ]
  },
  {
    "court": "Court 3",
    "teams": [
      {
        "id": 1,
        "players": [
          { "name": "Isaac R." },
          { "name": "Jasmine S." }
        ]
      },
      {
        "id": 2,
        "players": [
          { "name": "Kevin T." },
          { "name": "Lara U." }
        ]
      }
    ]
  }
];

export default function QueuePage() {

  return (
    <>
      <Header />
      <main className="font-lato max-w-6xl mt-8 mx-auto p-6">
        <section className="flex flex-col gap-y-2">

          <Property />

          {data.map(queue => (
            <Queue court={queue.court} >
              {queue.teams.map(team => (
                <Team id={team.id}>
                  {team.players.map(player => (
                    <Player name={player.name} />
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
  )
}
