import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlayer, removePlayer } from "./playerSlice";

const App = () => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  const handleAddPlayer = () => {
    // Replace "New Player" and "default-image-url" with the desired name and image URL
    const newPlayer = {
      id: players.id,
      name: players.name,
      imageUrl: players.imageUrl,
    };
    dispatch(addPlayer(newPlayer));
  };

  const handleRemovePlayer = (id) => {
    dispatch(removePlayer(id));
  };

  return (
    <div>
      <button onClick={handleAddPlayer}>Add Player</button>
      <ul>
        <li key={players.id}>
          {players.name}
          <button onClick={() => handleRemovePlayer(players.id)}>Remove</button>
        </li>
      </ul>
    </div>
  );
};

export default App;
