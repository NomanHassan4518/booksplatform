const express = require("express");
const app = express();
let cors = require("cors");
const nodemailer = require("nodemailer");
const cron = require("node-cron");
const axios = require("axios");

app.use(express.json());
app.use(cors());

require("./collections/config");
let User = require("./collections/user");
let Book = require("./collections/book");
let Order = require("./collections/order");
let OrderHistory = require("./collections/history");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  service: "Gmail",
  auth: {
    user: "malikhassanhu55@gmail.com",
    pass: "bdxx kpiv cvfu vflh",
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
  console.log(result);
  const mailOptions = {
    from: "malikhassanhu55@gmail.com",
    to: result.userEmail,
    subject: `Order Confirmation`,
    text: `
Dear ${result.userName},

Thank you for choosing The Books Platform for your recent purchase!

We are writing to confirm that we have successfully received your order, and it is currently being processed with the utmost care and attention to detail.

Below, you'll find the detailed list of the items you've ordered:

Books Ordered:
${result.orderedBooks
  .map(
    (book, index) =>
      `${index + 1}. [ ${book.Product.name} (PKR.${book.Product.price}) ]`
  )
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

app.post("/sendOTP", async (req, res) => {
  console.log(req.body);
  const mailOptions = {
    from: "malikhassanhu55@gmail.com",
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
});

app.get("/orderstatus", async (req, resp) => {
  let order = await Order.find(req.body);
  resp.status(200).json({ data: order });
});

app.delete("/orderDelete/:id", async (req, resp) => {
  let result = await Order.deleteOne({ _id: req.params.id });
  resp.status(200).json({ data: result });
});

// Helper function to get the next status based on the current status
function getNextStatus(currentStatus) {
  const statusSequence = ["Pending", "Processing", "Shipped", "Delivered"];
  const currentIndex = statusSequence.indexOf(currentStatus);
  if (currentIndex === -1 || currentIndex === statusSequence.length - 1) {
    return "complete"; // If the current status is not in the sequence or is the last one, set it to 'complete'
  } else {
    return statusSequence[currentIndex + 1]; // Otherwise, return the next status in the sequence
  }
}


console.log("All test cases passed");


// Update order status every minute (for testing)
cron.schedule("*/5 * * * *", async () => {
  try {
    const orders = await Order.find({
      status: { $nin: ["complete", "cancelled"] },
    });
    orders.forEach(async (order) => {
      try {
        let nextStatus = getNextStatus(order.status);
        if (nextStatus === "complete") {
          // Move order to OrderHistory and remove from Orders
          const orderHistory = new OrderHistory({
            userID: order.userID,
            userName: order.userName,
            userEmail: order.userEmail,
            userPhone: order.userPhone,
            userAddress: order.userAddress,
            userNote: order.userNote,
            orderedBooks: order.orderedBooks,
            completedAt: new Date(),
          });
          await orderHistory.save();
          await Order.deleteOne({ _id: order._id });
          console.log(
            `Order ${order._id} moved to OrderHistory and removed from Orders`
          );
        } else {
          // Make an API call to update order status
          await axios.put(
            `http://localhost:5000/api/orders/updateStatus/${order._id}`,
            { status: nextStatus }
          );
          console.log(`Order ${order._id} status updated to '${nextStatus}'`);
        }
      } catch (error) {
        console.error(`Error updating status for order ${order._id}:`, error);
      }
    });
  } catch (err) {
    console.error("Error updating orders:", err);
  }
});

// Route to update order status
app.put("/api/orders/updateStatus/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/orderHistory", async (req, res) => {
  try {
    const history = await OrderHistory.find(req.body).lean().exec();
    res.json(history);
  } catch (error) {
    console.error("Error fetching order history:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
