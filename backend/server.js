// backend/server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());

// Proxy all /api/v1 requests to Wallhaven
app.get("/api/v1/*", async (req, res) => {
  try {
    const targetUrl = `https://wallhaven.cc${req.originalUrl}`;
    const response = await fetch(targetUrl);
    const contentType = response.headers.get("content-type");
    res.set("Content-Type", contentType);
    const body = await response.text();
    res.status(response.status).send(body);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Proxy failed" });
  }
});

app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
