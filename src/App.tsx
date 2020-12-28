import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <div>
                <AppNav />
                <main className="container">
                    <Switch>
                        <Route exact path="/">
                            <NoGame />
                        </Route>
                        <Route path="/game/new">
                            <h1>New Game</h1>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

function AppNav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Qu</span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/netxph/qu">Contribute</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

function NoGame() {
    return (
        <div className="bg-light rounded p-5">
            <h1>Start a New Game</h1>
            <p className="lead"> There is no active game currently running. To start a new game, click the new game button below.</p>
            <Link className="btn btn-lg btn-primary" to="/game/new" >New Game</Link>
        </div>
    );
}

export default App;
