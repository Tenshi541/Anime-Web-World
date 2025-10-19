import express from "express";
import fetch from "node-fetch";
import NodeCache from "node-cache";

const router = express.Router();
const cache = new NodeCache({ stdTTL: 300 }); // 5 mins

router.get("/top", async (req, res) => {
  const cached = cache.get("top_anime");
  if (cached) return res.json(cached);

  const response = await fetch("https://api.jikan.moe/v4/top/anime");
  const data = await response.json();
  cache.set("top_anime", data);

  res.json(data);
});

export default router;
