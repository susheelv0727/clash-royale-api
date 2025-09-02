import React, { useState } from "react";

export default function PlayerSearch({ onSearch }) {
  const [tag, setTag] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!tag.trim()) return;
    onSearch(tag);
  }

  return (
    <form onSubmit={submit} className="player-search">
      <input
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="Enter player tag (e.g. #2YQ0PLLL)"
      />
      <button type="submit">Search</button>
    </form>
  );
}
