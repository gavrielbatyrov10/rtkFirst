import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlayer, removePlayer } from "./playerSlice";

const Players = () => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  const handleAddPlayer = () => {
    // Generate a unique id for the new player
    const id = Math.random().toString(36).substr(2, 9);

    // Replace "New Player" and "default-image-url" with the desired name and image URL
    const newPlayer = {
      id,
      name: "New Player",
      imageUrl: "default-image-url",
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
        {Array.isArray(players) ? (
          players.map((player) => (
            <li key={player.id}>
              {player.name}
              <button onClick={() => handleRemovePlayer(player.id)}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <li>No players available</li>
        )}
      </ul>
    </div>
  );
};

export default Players;
