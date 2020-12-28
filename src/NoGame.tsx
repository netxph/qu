import React from 'react';
import {
    Link
} from 'react-router-dom';

function NoGame() {
    return (
        <div className="bg-light rounded p-5">
            <h1>Start a New Game</h1>
            <p className="lead"> There is no active game currently running. To start a new game, click the new game button below.</p>
            <Link className="btn btn-lg btn-primary" to="/game/new" >New Game</Link>
        </div>
    );
}

export default NoGame;
