const mongoose = require("mongoose");

const order = new mongoose.Schema({
  userID: String,
  userName: String,
  userEmail: String,
  userPhone: String,
  userAddress: String,
  userNote: String,
  orderedBooks: Array,
});

module.exports= mongoose.model('order',order)