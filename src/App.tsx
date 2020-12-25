import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Qu</span>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contribute</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="container">
                <div className="bg-light rounded p-5">
                    <h1>Start a New Game</h1>
                    <p className="lead"> There is no active game currently running. To start a new game, click the new game button below. </p>
                    <a className="btn btn-lg btn-primary" role="button" href="#">New Game</a>
                </div>
            </main>
        </div>
    );
}

export default App;
