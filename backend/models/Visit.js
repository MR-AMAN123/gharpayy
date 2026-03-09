const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  leadId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lead"
  },
  property: String,
  visitDate: Date,
  outcome: String
});

module.exports = mongoose.model("Visit", visitSchema);