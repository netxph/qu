import './App.css'

function App() {

  return (
    <>
      <header className="font-lato max-w-6xl mx-auto flex justify-between p-6">
        <h1 className="text-4xl font-extrabold">Tuesday Group</h1>
      </header>
      <main className="font-lato max-w-6xl mt-8 mx-auto p-6">
        <section className="flex flex-col gap-y-2">
          <div className="flex justify-between items-baseline-last px-2">
            <div>
              <h2 className="font-bold text-xl">Queue</h2>
              <p className="text-gray-400 text-xs">17 Sept 2024</p>
            </div>
            <p className="text-gray-400 text-xs">0p 1c : 2v2</p>
          </div>
          <article>
            <div className="p-4 rounded-lg bg-white shadow-md">
              <div className="flex justify-between">
                <h3 className="font-bold">Court 1</h3>
                <div className="flex gap-x-2">
                  <button className="text-xs">Play</button>
                  <button className="text-xs">Edit</button>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div>
                  <p>Player 1</p>
                  <p>Player 2</p>
                </div>
                <div>
                  <p>Player 3</p>
                  <p>Player 4</p>
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="p-4 rounded-lg bg-white mt-2 shadow-md">
              <div className="flex justify-between">
                <h3 className="font-bold">Court 2</h3>
                <div className="flex gap-x-2">
                  <button className="text-xs">Play</button>
                  <button className="text-xs">Edit</button>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div>
                  <p>Player 5</p>
                  <p>Player 6</p>
                </div>
                <div>
                  <p>Player 7</p>
                  <p>Player 8</p>
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="p-6 rounded-lg min-h-12 flex items-center justify-center bg-white mt-2 shadow-md">
              <a href="#">+</a>
            </div>
          </article>
        </section>
        <section className="fixed bottom-0 left-0 w-full">
          <nav className="flex justify-around shadow-lg p-4 bg-white rounded-t-xl">
            <button>Home</button>
            <button>Players</button>
            <button>Stats</button>
            <button>Settings</button>
          </nav>
        </section>
      </main>
    </>
  )
}

export default App
