import express from "express";

const app = express();

app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

export default app;
