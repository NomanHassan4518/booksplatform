const express = require("express");
const app = express();
let cors = require("cors");

app.use(express.json());
app.use(cors());

require("./collections/config");
let User = require("./collections/user");

app.get("/", (req, res) => {
  res.send("api is working");
});

app.post("/signup", async (req, res) => {
  let user = User(req.body);
  let result = await user.save();
  result=result.toObject();
  delete result.password
  res.send(result);
});

app.listen(5000);
