const express = require("express");
const app = express();
let cors = require("cors");

app.use(express.json());
app.use(cors());

require("./collections/config");
let User = require("./collections/user");
let Book = require("./collections/book");

app.get("/", (req, res) => {
  res.send("api is working!");
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

app.post("/addproduct", async (req, resp) => {
  let book = Book(req.body)
  let result = await book.save()
  resp.status(200, {data:result})
});

app.put("/book", async (req, res) => {
  try {
    const updates = req.body; // Array of book updates [{ bookId, quantity }, ...]
    // Loop through each update
    for (const update of updates.orderItems) {
      const { bookId, quantity } = update;

      // Find the book by ID
      let book = await Book.findById(bookId);

      if (!book) {
        return res.status(404).json({ error: `Book with ID ${bookId} not found` });
      }

      // Update the stock
      book.stock -= quantity;
      await book.save();
    }

    res.status(200).json({ message: "Stocks updated successfully" });
  } catch (error) {
    console.error("Error updating stocks:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});







app.get("/books", async (req, resp) => {
  let books = await Book.find(req.body);
  resp.send(books);
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

