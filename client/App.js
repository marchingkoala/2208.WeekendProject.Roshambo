import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Leaderboard from './components/Leaderboard';
import Home from './components/Home'
import SinglePlayer from './components/SinglePlayer';
import CreatePlayer from './components/CreatePlayer';


const App = () => {

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
      <Route path="/leaderboard" element={<Leaderboard />}></Route>
      <Route path="/leaderboard/:id" element={ <SinglePlayer />}></Route>
      <Route path="/create-player" element={<CreatePlayer />}></Route>
    </Routes>
    </div>
  );
};

export default App;