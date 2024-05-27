const express = require("express");
const app = express();
let cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

app.use(express.json());
app.use(cors());

require("./collections/config");
let User = require("./collections/user");
let Book = require("./collections/book");
let Order = require("./collections/order");

const transporter = nodemailer.createTransport({
  host: process.env.host,
  port: process.env.port,
  service: "Gmail",
  auth: {
    user: process.env.user,
    pass: process.env.pass,
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
    from: process.env.user,
    to: result.userEmail,
    subject: `Order Confirmation`,
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
The Books Platform

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

app.post('/sendOTP', async (req,res)=>{
  const mailOptions = {
    from: process.env.user,
    to: req.body.result.email,
    subject: `Your One-Time Password (OTP) for Account Verification`,
    text: `Dear ${req.body.result.name},

Thank you for choosing The Books Platform! As part of our commitment to ensuring the security of your account, we have generated a One-Time Password (OTP) for verification purposes.

Your OTP is: ${req.body.randomNumber}

Please use this OTP to complete the verification process. If you did not initiate this request, please contact our support team immediately.

Thank you for your cooperation.

Best regards,
The Books Platform`,
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
})

const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
