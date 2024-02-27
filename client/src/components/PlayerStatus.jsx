import axios from 'axios';
import { useEffect, useState } from 'react';

const PlayerStatus = () => {
  const [players, setPlayers] = useState([]);
  const [update, setUpdate] = useState(false);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/players')
      .then((res) => setPlayers(res.data))
      .catch((err) => console.log(err));
  }, [update]);

  const changeState = (id, state) => {
    axios.patch(`http://localhost:8000/api/players/${id}`, { state: state })
      .then((res) => {
        console.log(res);
        setUpdate(!update);
      })
      .catch((err) => console.log(err));
  };

  const getStatusButtonColor = (status) => {
    switch (status) {
      case 'Playing':
        return 'green';
      case 'Not Playing':
        return 'red';
      case 'Undecided':
      default:
        return 'yellow';
    }
  };

  const handleButtonClick = (playerId, state) => {
    setSelectedPlayerId(playerId);
    changeState(playerId, state);
  };

  return (
    <div>
      <h1>Player Status</h1>
      <ul>
        {players.map((player, i) => (
          <li key={i}>
            {player.name} {player.position}
            <button
              style={{
                backgroundColor: selectedPlayerId === player._id ? getStatusButtonColor(player.state) : 'white',
              }}
              onClick={() => handleButtonClick(player._id, 'Playing')}
            >
              Playing
            </button>
            <button
              style={{
                backgroundColor: selectedPlayerId === player._id ? getStatusButtonColor(player.state) : 'white',
              }}
              onClick={() => handleButtonClick(player._id, 'Not Playing')}
            >
              Not Playing
            </button>
            <button
              style={{
                backgroundColor: selectedPlayerId === player._id ? getStatusButtonColor(player.state) : 'white',
              }}
              onClick={() => handleButtonClick(player._id, 'Undecided')}
            >
              Undecided
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerStatus;

