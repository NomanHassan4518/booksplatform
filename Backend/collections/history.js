const mongoose = require("mongoose");

const history = new mongoose.Schema({
  userID: String,
  userName: String,
  userEmail: String,
  userPhone: String,
  userAddress: String,
  userNote: String,
  orderedBooks: Array,
  completedAt: { type: Date, default: Date.now }
});

module.exports= mongoose.model('orderHistory',history)