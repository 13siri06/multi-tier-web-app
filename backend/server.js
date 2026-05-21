const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());

app.get("/api/data", (req, res) => {
  const rawData = fs.readFileSync("data.json");
  const data = JSON.parse(rawData);

  data.visits += 1;

  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

  res.json(data);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});