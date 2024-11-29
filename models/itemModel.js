const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
});

module.exports = mongoose.model("Item", itemSchema);
