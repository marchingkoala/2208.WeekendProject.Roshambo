import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="mainPage">
        <h1 className="mainPage_header">Welcome to RPS Arena!</h1>

        <div className="mainButton">
          <Link to="/leaderboard">
            <button className="leaderButton">Leader Board</button>
          </Link>
          <button className="playButton">Play</button>
        </div>
      </div>
        </div>
    );
};

export default Home;