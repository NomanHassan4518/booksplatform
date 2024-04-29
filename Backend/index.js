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
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body);
    if (user) {
      res.send(user);
    } else {
      res.status(401).json({error:"user not found"});
    }
  } else {
    res.send("User not found!");

    
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

