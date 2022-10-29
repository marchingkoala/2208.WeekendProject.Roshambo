import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {setSelectedPlayers } from '../store/gameSlice'
import axios from 'axios';

const SinglePlayer = () => {

  const {id} = useParams() 

  const dispatch = useDispatch();
  const selectedPlayer = useSelector(state => state.game.selectedPlayer);
  const [doneLoading, setDoneLoading] = useState(false);

  const selectingPlayer = async () => {
      const { data: selectedUser } = await axios.get(`/api/players/${id}`);
      dispatch(setSelectedPlayers(selectedUser));
      setDoneLoading(true);
      };
  
  useEffect(()=>{
    selectingPlayer();
  }, [])

  if (doneLoading) {
    return (
      <div>
        <h2>Player Info</h2>
        <p>
          <b>Player UserName: </b>
          {selectedPlayer.username}
        </p>
        <div>
          {selectedPlayer.games.map((game) => {
            return (
              <p key={game.id}>
                <b>Game {game.id}'s result was: </b>
                {game.result}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
};

export default SinglePlayer;