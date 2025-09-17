import './App.css'

function App() {

  return (
    <>
      <header className="font-lato">
        <h1>Tuesday Group</h1>
        <p>17 Sept 2024</p>
        <a href="#">Settings</a>
        <p>0p 1c : 2v2</p>
      </header>
      <main className="font-lato">
        <div>
          <h2>Court 1</h2>
          <div>
            <p>Player 1</p>
            <p>Player 2</p>
          </div>
          <div>
            <p>Player 3</p>
            <p>Player 4</p>
          </div>
        </div>
        <div>
          <h2>Court 2</h2>
          <div>
            <p>Player 5</p>
            <p>Player 6</p>
          </div>
          <div>
            <p>Player 7</p>
            <p>Player 8</p>
          </div>
        </div>
        <div>
          <a href="#">+</a>
        </div>
      </main>
    </>
  )
}

export default App
