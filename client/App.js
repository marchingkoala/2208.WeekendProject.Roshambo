import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Leaderboard from './components/Leaderboard';
import Home from './components/Home'
import SinglePlayer from './components/SinglePlayer';

const App = () => {

  const [players, setPlayers] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState({})
  const [doneLoading, setDoneLoading] = useState(false)

    const fetchingPlayers = async () => {
      const fetchedData = await fetch("/api/players");
      const json = await fetchedData.json();
      setPlayers(json);
    };

    const selectingPlayer = async (playerId) =>{
      const fetchingPlayer = await fetch(`/api/players/${playerId}`);
      const json = await fetchingPlayer.json()
      setSelectedPlayer(json)
      setDoneLoading(true)
    }

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/leaderboard"
        element={
          <Leaderboard
            fetchingPlayers={fetchingPlayers}
            players={players}
            selectingPlayer={selectingPlayer}
            selectedPlayer={selectedPlayer}
          />
        }
      />
      <Route
        path="/leaderboard/:id"
        element={
          <SinglePlayer
            selectedPlayer={selectedPlayer}
            doneLoading={doneLoading}
          />
        }
      ></Route>
    </Routes>
  );
};

export default App;