import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllPlayers } from '../store/gameSlice';
import { Link } from "react-router-dom";
import axios from 'axios';

const Leaderboard = ({selectingPlayer}) => {

  // const [allPlayers, setAllPlayers] = useState([]);

  // const fetchingPlayers = async () => {
  //   const fetchedData = await fetch("/api/players");
  //   const json = await fetchedData.json();
  //   setAllPlayers(json);
  // };

  const dispatch = useDispatch();
  const allPlayers = useSelector((state) => state.allPlayers);

  const fetchingPlayers = async () => {
    const datas = await axios.get("/api/players");
    dispatch(setAllPlayers(datas));
    console.log("HELLO EVERYONE!!!!!!!")
    };


  useEffect(() => {
    fetchPlayers();
  }, []);


  return (
    <div>
        {allPlayers.map((player) => {
          return (
            <div key={player.id}>
                <Link to={`/leaderboard/${player.id}`}>
                  <button onClick={() => { selectingPlayer(player.id); }} >
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