import React, { useState } from "react";
import PlayerSearch from "./components/PlayerSearch";
import PlayerCard from "./components/PlayerCard";
import { getPlayer } from "./api";

export default function App() {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(tag) {
    setLoading(true);
    setError(null);
    setPlayer(null);
    try {
      const data = await getPlayer(tag);
      const p = {
        tag: data.tag,
        name: data.name,
        expLevel: data.expLevel,
        trophies: data.trophies,
        bestTrophies: data.bestTrophies,
        clan: data.clan ? { ...data.clan } : undefined,
        currentDeck: Array.isArray(data.currentDeck)
          ? data.currentDeck.map((c) => ({ id: c.id, name: c.name }))
          : undefined,
      };
      setPlayer(p);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-root">
      <h1>Clash Royale — Player Lookup</h1>
      <PlayerSearch onSearch={handleSearch} />
      {loading && <div>Loading…</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      {player && <PlayerCard player={player} />}
    </div>
  );
}
