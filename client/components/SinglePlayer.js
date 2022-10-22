import React from 'react';

const SinglePlayer = ({ selectedPlayer, doneLoading }) => {

  if (doneLoading === true) {
      return (
        <div>
          <h2>Player Info</h2>
          <p>
            <b>Player ID: </b>
            {selectedPlayer.id}
          </p>
          <p>
            <b>Player UserName: </b>
            {selectedPlayer.username}
          </p>
          <div>
            {selectedPlayer.games.map((game)=>{
              return (
                <p key={game.id}><b>Game {game.id}'s result was: </b>{game.result}</p>
              )
            })}
          </div>
        </div>
      );
  }
};

export default SinglePlayer;