import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Leaderboard from './components/Leaderboard';
import Home from './components/Home'
import SinglePlayer from './components/SinglePlayer';
import CreatePlayer from './components/CreatePlayer';

const App = () => {

  const [selectedPlayer, setSelectedPlayer] = useState({}) //information of 1 selected player from /api/plyaers/:playerId
  const [doneLoading, setDoneLoading] = useState(false) // true/false state made specifically for rendering solution.
  // with doneLoading state, we can safely map the selectedPlayer's game result


  //getting data of 1 selected player for Singleplayer page
  //this function is triggered when user clicks on player's name button

    const selectingPlayer = async (playerId) =>{
      const fetchingPlayer = await fetch(`/api/players/${playerId}`);
      const json = await fetchingPlayer.json()
      setSelectedPlayer(json)
      setDoneLoading(true)
    }

  return (
    <div>
      <div>
        <h1>Welcome to RSP Game!</h1>
        <Link to="/"><button>Home</button></Link>
        <Link to="/leaderboard"><button>Leaderboard</button></Link>
        <Link to="/play"><button>Play</button></Link>
        <Link to="/create-player"><button>Create New Players</button></Link>
      </div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/leaderboard" element={<Leaderboard selectingPlayer={selectingPlayer} />}></Route>
      <Route path="/leaderboard/:id" element={ <SinglePlayer selectedPlayer={selectedPlayer} doneLoading={doneLoading} />}></Route>
      <Route path="/create-player" element={<CreatePlayer />}></Route>
    </Routes>
    </div>
  );
};

export default App;