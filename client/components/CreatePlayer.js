import axios from 'axios';
import React, { useState } from 'react';

const CreatePlayer = () => {

    const [username, setUsername] = useState("")

    const usernameHandler = (event) =>{
        setUsername(event.target.value)
    }

    const enterTheWarrior = async (event) =>{
        event.preventDefault();

        const body = { username: username}

        const res = await axios.post("/api/players", body)
        console.log(res);
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