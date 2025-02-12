import { useState } from 'react'
import './App.css'

function App() {
  return (
    <main>
      <nav className="qu-nav" >
        <div className=" flex justify-between items-center">
          <a href="#" className="font-bold text-xl text-gray-800">Qu!</a>
          <div className="hidden md:flex">
            <ul className="flex space-x-6">
              <li><a href="#" className="qu-nav-item">Game</a></li>
              <li><a href="#" className="qu-nav-item">Queue</a></li>
              <li><a href="#" className="qu-nav-item">Players</a></li>
              <li><a href="#" className="qu-nav-item">Stats</a></li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="focus:outline-none">
              <div className="h-1 w-6 mb-1 bg-gray-600"></div>
              <div className="h-1 w-6 mb-1 bg-gray-600"></div>
              <div className="h-1 w-6 bg-gray-600"></div>
            </button>
          </div>
        </div>
      </nav>
      <section className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Game</h1>
        <ul className="divide-y divide-gray-100 shadow-md">
          <li className="flex gap-x-6 py-5">
            <div className="qu-list-team">
              <p>Clark Kent</p>
              <p>Lois Lane</p>
            </div>
            <div className="qu-list-team">
              <p>Bruce Wayne</p>
              <p>Diana Prince</p>
            </div>
          </li>
          <li className="flex gap-x-6 py-5">
            <div className="qu-list-team">
              <p>Bruce Banner</p>
              <p>Steve Rogers</p>
            </div>
            <div className="qu-list-team">
              <p>Tony Stark</p>
              <p>Thor Odinson</p>
            </div>
          </li>
          <li className="flex gap-x-4 py-5">
            <div className="qu-list-team">
              <p>Wade Wilson</p>
              <p>Logan Logan</p>
            </div>
            <div className="qu-list-team">
              <p>Scott Summers</p>
              <p>Charles Xavier</p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App
