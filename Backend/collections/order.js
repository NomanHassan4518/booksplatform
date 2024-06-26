const mongoose = require("mongoose");

const order = new mongoose.Schema({
  userID: String,
  userName: String,
  userEmail: String,
  userPhone: String,
  userAddress: String,
  userNote: String,
  orderedBooks: Array,
  status: { type: String, default: 'pending' }
});

module.exports= mongoose.model('order',order)