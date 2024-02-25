import React, { useState } from "react";
import { useAddPlayerMutation } from "./api";

export default function AddPlayerForm() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [addPlayer, { isLoading }] = useAddPlayerMutation();

  const handleAddPlayer = async (e) => {
    e.preventDefault();
    const player = { name, imageUrl };
    await addPlayer(player);
    setName("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleAddPlayer}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL"
      />
    </form>
  );
}
