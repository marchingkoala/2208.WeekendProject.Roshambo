import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { addPlayer } from '../store/gameSlice'

const CreatePlayer = () => {

  const [username, setUsername] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const usernameHandler = (event) => {
      setUsername(event.target.value);
    };

  const enterTheWarrior = async (event) =>{
        event.preventDefault();
        const { data: created } = await axios.post("/api/players", {username : username});
        dispatch(addPlayer(created))
        console.log(created);
        navigate("/leaderboard");
    }


    return (
      <div className="playerform">
        <h2>You dare to enter the RPS arena?</h2>
        <form onSubmit={enterTheWarrior}>
          <label>UserName: </label>
          <input value={username} type="text" onChange={usernameHandler} />

          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
};

export default CreatePlayer;