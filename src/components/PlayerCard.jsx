import React from "react";

export default function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <header>
        <h2>{player.name}</h2>
        <span>{player.tag}</span>
      </header>

      <div className="stats">
        <div>
          <strong>Trophies</strong>
          <div>{player.trophies}</div>
        </div>
        <div>
          <strong>Level</strong>
          <div>{player.expLevel}</div>
        </div>
        <div>
          <strong>Best</strong>
          <div>{player.bestTrophies ?? "-"}</div>
        </div>
      </div>

      {player.clan && (
        <div className="clan">
          <h3>Clan</h3>
          <div>
            {player.clan.name} <small>({player.clan.role})</small>
          </div>
          <div>{player.clan.tag}</div>
        </div>
      )}

      {player.currentDeck?.length > 0 && (
        <div className="deck">
          <h3>Current Deck</h3>
          <ul>
            {player.currentDeck.map((c, i) => (
              <li key={c.id ?? `${c.name}-${i}`}>{c.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
