import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNav from './AppNav';
import NoGame from './NoGame';

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
                        <Route path="/game/setup">
                            <h1>New Game</h1>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;
