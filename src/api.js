export async function getPlayer(tag) {
    const clean = tag.replace("#", "");
    const res = await fetch(`/api/player/${encodeURIComponent(clean)}`);
    if (!res.ok) throw new Error("Failed to fetch player data");
    return res.json();
  }