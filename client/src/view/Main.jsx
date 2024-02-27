import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayerList from '../components/PlayerList';

const Main = () => {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  const handleAddPlayer = () => {
    navigate('/players/create');
  };
  const handleChangeStatus = () => {
    navigate('/players/status');
  };

  return (
    <div>
      <h1>Manage Player</h1>
      <a onClick={handleAddPlayer}> Add player |</a>
      <a onClick={handleChangeStatus}> Manage player status</a>
      <PlayerList players={players} setPlayers={setPlayers} />
    </div>
  );
};

export default Main;
