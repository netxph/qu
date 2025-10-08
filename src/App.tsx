import './App.css'
import Header from './components/Header.tsx'
import Property from './components/Property.tsx'
import Queue from './components/Queue.tsx'
import EmptyQueue from './components/EmptyQueue.tsx'
import Menu from './components/Menu.tsx'

function App() {

  return (
    <>
      <Header />
      <main className="font-lato max-w-6xl mt-8 mx-auto p-6">
        <section className="flex flex-col gap-y-2">

          <Property />
          <Queue />
          <Queue />
          <Queue />
          <EmptyQueue />
          <Menu />

        </section>
      </main>
    </>
  )
}

export default App
