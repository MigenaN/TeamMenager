import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const PlayerForm = ({ players, setPlayers }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const navigate = useNavigate();

  const createPlayer = () => {
    axios
      .post("http://localhost:8000/api/players", { name, position })
      .then((res) => {
        const updatedPlayers = Array.isArray(players)
          ? [...players, res.data]
          : [res.data];
        setPlayers(updatedPlayers);
        setName("");
        setPosition("");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Add a new Player</h3>
      <p>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        <label>Preferred position: </label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </p>
      <Link to="/">
        <button type="button" onClick={createPlayer}>
          Submit
        </button>
      </Link>
      <Link to="/">
        <button type="button">Cancel</button>
      </Link>
    </div>
  );
};

export default PlayerForm;

