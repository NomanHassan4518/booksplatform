const express = require("express");
const app = express();
let cors = require("cors");
const nodemailer = require("nodemailer");

app.use(express.json());
app.use(cors());

require("./collections/config");
let User = require("./collections/user");
let Book = require("./collections/book");
let Order = require("./collections/order");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  service: "Gmail",
  auth: {
    user: "malikhassanhu55@gmail.com",
    pass: "fgzv tqqz twpm rlwq",
  },
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
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.status(401).json({ error: "user not found" });
    }
  } else {
    res.status(401).json({ error: "user not found" });
  }
});

app.post("/addproduct", async (req, resp) => {
  let book = Book(req.body);
  let result = await book.save();
  resp.status(200).json({ data: result });
});

app.get("/allBooks", async (req, resp) => {
  let books = await Book.find(req.body);
  resp.send(books);
});

app.put("/updateStock", async (req, res) => {
  try {
    const updates = req.body; // Array of book updates [{ bookId, quantity }, ...]
    // Loop through each update
    for (const update of updates.orderItems) {
      const { bookId, quantity } = update;

      // Find the book by ID
      let book = await Book.findById(bookId);

      if (!book) {
        return res
          .status(404)
          .json({ error: `Book with ID ${bookId} not found` });
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

app.post("/userOrder", async (req, res) => {
  let orders = Order(req.body);
  let result = await orders.save();
  const mailOptions = {
    from: "malikhassanhu55@gmail.com",
    to: result.userEmail,
    subject: `Order Confirmation [${result._id}]`,
    text: `
Dear ${result.userName},

Thank you for choosing The Books Platform for your recent purchase!

We are writing to confirm that we have successfully received your order, and it is currently being processed with the utmost care and attention to detail.

Below, you'll find the detailed list of the items you've ordered:

Books Ordered:
${result.orderedBooks
  .map((book, index) => `${index + 1}. [ ${book.Product.name} ]`)
  .join("\n")}


If you have any questions or need further assistance regarding your order, please don't hesitate to reach out to our customer support team. We're here to help!

Once again, thank you for your purchase. We truly appreciate your business.

Best regards,
Noman Hassan
The Books Platform
malikhassanhu55@gmail.com

    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send({ error: "Error sending email" });
    } else {
      console.log("Email sent: " + info.response);
      res.send({ message: "Email sent successfully" });
    }
  });
  res.status(200, { order: result });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
