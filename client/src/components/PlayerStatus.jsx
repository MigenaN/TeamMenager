import axios from 'axios';
import { useEffect, useState } from 'react';

const PlayerStatus = () => {
  const [players, setPlayers] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/players')
      .then((res) => setPlayers(res.data))
      .catch((err) => console.log(err));
  }, [update]);

  const changeState = (id, state) => {
    axios.patch(`http://localhost:8000/api/players/${id}`, { state })
      .then((res) => {
        console.log(res);
        setUpdate(!update);
      })
      .catch((err) => console.log(err));
  };

  const getStatusButtonStyle = (status) => ({
    backgroundColor: { 'Playing': 'green', 'Not Playing': 'red', 'Undecided': 'yellow' }[status],
  });

  const handleButtonClick = (playerId, status) => {
    const updatedPlayers = players.map(player =>
      player._id === playerId ? { ...player, state: status } : player
    );

    setPlayers(updatedPlayers);
    changeState(playerId, status);
  };

  return (
    <div>
      <h1>Player Status</h1>
      <ul>
        {players.map((player) => (
          <li key={player._id}>
            {player.name} {player.position}
            {['Playing', 'Not Playing', 'Undecided'].map((status, index) => (
              <button
                key={index}
                style={getStatusButtonStyle(player.state === status ? status : '')}
                onClick={() => handleButtonClick(player._id, status)}
              >
                {status}
              </button>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerStatus;

