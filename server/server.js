import fetch from "node-fetch";

export default async function handler(req, res) {
  const { tag } = req.query;
  const TOKEN = process.env.VITE_CR_TOKEN;
  const url = `https://api.clashroyale.com/v1/players/%23${encodeURIComponent(tag)}`;

  const response = await fetch(`https://your-vercel-proxy.vercel.app/api/player/PRCUQULC2`)
  .then(res => res.json());
  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(data);
}