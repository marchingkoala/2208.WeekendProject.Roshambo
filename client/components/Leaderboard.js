import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setAllPlayers } from "../store/gameSlice";
import { Link } from "react-router-dom";
import axios from 'axios';

const Leaderboard = ({ selectingPlayer }) => {
  const allPlayers = useSelector((state) => state.game.allPlayers);
  const dispatch = useDispatch();

  const fetchingPlayers = async () => {
    const { data: test } = await axios.get("/api/players");
    dispatch(setAllPlayers(test));

  };

  useEffect(() => {
    fetchingPlayers();
  }, []);

  return (
    <div>
      <h2>Hello World</h2>
      {allPlayers.map((player) => {
          return (
            <div key={player.id}>
                <Link to={`/leaderboard/${player.id}`}>
                  <button >
                    <p>
                      <b>Name: </b> {player.username} </p>
                  </button>
                </Link>
            </div>
          );
        })}
    </div>
  );
};;

export default Leaderboard;