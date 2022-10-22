import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import SinglePlayer from './SinglePlayer';

const Leaderboard = ({
  selectingPlayer,
  fetchingPlayers,
  players,
  selectedPlayer,
}) => {
  useEffect(() => {
    fetchingPlayers();
  }, []);

  return (
    <div>
      <h1>Look at these Brave Warriors!</h1>
      <div className="warriorList">
        {players.map((player) => {
          return (
            <div key={player.id}>
              <div className="playerLinkButton">
                {/* <Link to={`/leaderboard/${player.id}`}> */}
                  <button
                    onClick={() => {
                      selectingPlayer(player.id);
                    }}
                  >
                    <p>
                      <b>Name: </b>
                      {player.username}
                    </p>
                  </button>
                {/* </Link> */}
              </div>

              {/* <Routes>
                <Route
                  exact path={`/leaderboard/${player.id}`}
                  element={
                    <SinglePlayer />
                  }
                />
              </Routes> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leaderboard;