const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Person", PersonSchema);
