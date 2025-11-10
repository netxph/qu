import Header from '../components/Header'
import Property from '../components/Property'
import Queue from '../components/Queue'
import EmptyQueue from '../components/EmptyQueue'
import Team from '../components/Team'
import Player from '../components/Player'
import Menu from '../components/Menu'

export default function QueuePage() {

  return (
    <>
      <Header />
      <main className="font-lato max-w-6xl mt-8 mx-auto p-6">
        <section className="flex flex-col gap-y-2">

          <Property />
          <Queue court="Court 1">
            <Team id={1}>
              <Player name="Player1" />
              <Player name="Player2" />
            </Team>
            <Team id={2}>
              <Player name="Player3" />
              <Player name="Player4" />
            </Team>
          </Queue>
          <Queue court="Court 2">
            <Team id={1}>
              <Player name="Player1" />
              <Player name="Player2" />
            </Team>
            <Team id={2}>
              <Player name="Player3" />
              <Player name="Player4" />
            </Team>
          </Queue>
          <Queue court="Court 3">
            <Team id={1}>
              <Player name="Player1" />
              <Player name="Player2" />
            </Team>
            <Team id={2}>
              <Player name="Player3" />
              <Player name="Player4" />
            </Team>
          </Queue>
          <EmptyQueue />
          <Menu />

        </section>
      </main>
    </>
  )
}
