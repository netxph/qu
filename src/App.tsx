import './App.css'

function App() {

  return (
    <>
      <header className="font-lato max-w-6xl mx-auto flex justify-between p-6 bg-white">
        <div>
          <h1 className="text-4xl font-extrabold">Tuesday Group</h1>
          <p className="text-gray-400">17 Sept 2024</p>
        </div>
        <div className="text-right">
          <a href="#" className="text-gray-300">Settings</a>
          <p className="text-gray-400">0p 1c : 2v2</p>
        </div>
      </header>
      <main className="font-lato max-w-6xl mt-8 mx-auto p-6">
        <section className="flex flex-col gap-y-2">
          <article>
            <div className="p-4 rounded-lg bg-gray-50 mt-2 shadow-md">
              <h2 className="text-gray-400 text-2xl font-bold">Court 1</h2>
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
            <div className="p-4 rounded-lg bg-gray-50 mt-2 shadow-md">
              <h2 className="text-gray-400 text-2xl font-bold">Court 2</h2>
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
            <div className="p-6 rounded-lg min-h-12 flex items-center justify-center bg-gray-50 mt-2 shadow-md">
              <a href="#">+</a>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default App
