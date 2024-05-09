const express = require("express");
const app = express();
let cors = require("cors");
const nodemailer = require('nodemailer');


app.use(express.json());
app.use(cors());

require("./collections/config");
let User = require("./collections/user");
let Book = require("./collections/book");
let Order=require("./collections/order")

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  service: 'Gmail',
  auth: {
      user: 'malikhassanhu55@gmail.com',
      pass: 'fgzv tqqz twpm rlwq'
  }
});





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
    let user = await User.findOne(req.body).select("-password");
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
  resp.status(200).json({ data: result });
});


app.get("/books", async (req, resp) => {
  let books = await Book.find(req.body);
  resp.send(books);
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

// app.put("/updateAllStock", async (req, res) => {
//   try {
//     const newStockValue = req.body; // New stock value for all books
//     console.log(newStockValue.stock);

//   // Update the stock for all books
//   await Book.updateMany({}, { $set: { stock: newStockValue.stock } });

//   res.status(200).json({ message: "All stocks updated successfully" });
// } catch (error) {
//   console.error("Error updating stocks:", error);
//   res.status(500).json({ error: "Internal server error" });
// }
// });



app.post("/userOrder", async (req,res)=>{
  let orders=Order(req.body)
  let result=await orders.save();
  res.status((200),{order:result})
})



app.post("/confirmOderEmail", async (req,res)=>{
  let {userID,userEmail}=req.body
let user = await User.findOne(userID) 
let ord = await Order.find();  
console.log(ord[ord.length-1]._id);
setInterval(()=>{
  const mailOptions = { 
    from: 'malikhassanhu55@gmail.com', 
    to: user.email,
    subject: `Order Confirmation for [${ord[ord.length-1]._id}]`, 
    text: `Dear ${user.name},
  
    Thank you for shopping with us! This email is to confirm that we have received your order and it is being processed. Below are the details of your order:
    
    Order ID: [OrderID]
    Books Ordered:
    [Book 1 Name]
    [Book 2 Name]
    [Book 3 Name]
    (List all books ordered)
    Total: [Total amount]` 
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).send({ error: 'Error sending email' });
  } else {
      console.log('Email sent: ' + info.response);
      res.send({ message: 'Email sent successfully' });
  }
  },[60000]);
})
})
 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

