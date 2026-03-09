const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: String,
  phone: String,
  source: String,
  status: {
    type: String,
    default: "New Lead"
  },
  assignedAgent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agent"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Lead", leadSchema);