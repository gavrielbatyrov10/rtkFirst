import { useGetPlayersQuery } from "./playerSlice";

export default function Players() {
  const { data: players, isLoading } = useGetPlayersQuery();
  console.log(players);
  return (
    <>
      <ul>
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          players.data.players.map((player) => (
            <li key={player.id}>
              <h2>{player.name ? player.name : "No Name"}</h2>
              <img src={player.image} alt={player.name} />
            </li>
          ))
        )}
      </ul>
    </>
  );
}
