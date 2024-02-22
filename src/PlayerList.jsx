// src/PlayerList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlayer, removePlayer } from "./playerSlice";

const PlayerList = () => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  const handleAddPlayer = () => {
    const newPlayer = { id: players.length + 1, name: "New Player" };
    dispatch(addPlayer(newPlayer));
  };

  const handleRemovePlayer = (id) => {
    dispatch(removePlayer(id));
  };

  return (
    <div>
      <button onClick={handleAddPlayer}>Add Player</button>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name}
            <button onClick={() => handleRemovePlayer(player.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
