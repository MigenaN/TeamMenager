import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PlayerList.css';


const PlayerList = ({ players, setPlayers }) => {
  const deletePlayer = (playerId) => {
    axios.delete(`http://localhost:8000/api/players/${playerId}`)
      .then((res) => {
        setPlayers((prevPlayers) => prevPlayers.filter((player) => player._id !== playerId));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/players')
      .then((res) => {
        setPlayers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setPlayers]);

  return (
    <div>
      {players.map((player) => (
        <div className="player-item" key={player._id}>
            <Link to={`/players/${player._id}`}>{player.name} </Link>
              |
            <Link to={`/players/${player._id}`}>{player.position}</Link>
          <span className="action-separator">|</span>
          <button onClick={() => deletePlayer(player._id)} className="action-button">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;


