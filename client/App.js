import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Leaderboard from './components/Leaderboard';

const App = () => {

  const [players, setPlayers] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState({})

    const fetchingPlayers = async () => {
      const fetchedData = await fetch("/api/players");
      const json = await fetchedData.json();
      setPlayers(json);
    };

    const selectingPlayer = async (playerId) =>{
      const fetchingPlayer = await fetch(`/api/players/${playerId}`);
      const json = fetchingPlayer.json()
      setSelectedPlayer(json)
      console.log(json)
    }

  return (
    <div className="row container">
      {/* The game starts here! */}
      <div className="mainPage">
        <h1 className="mainPage_header">Welcome to RPS Arena!</h1>

        <div className="mainButton">
          <Link to="/leaderboard">
            <button className="leaderButton">Leader Board</button>
          </Link>
          <button className="playButton">Play</button>
        </div>
      </div>
      <Routes>
        <Route
          path="/leaderboard/*"
          element={
            <Leaderboard
              fetchingPlayers={fetchingPlayers}
              players={players}
              selectingPlayer={selectingPlayer}
              selectedPlayer={selectedPlayer}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;