const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  region: String,
  province: String,
  lieu: String,
  centre: String,
  emei: Number,
  type: String,
  map: String,
  created: {
    type: Date,
    default: Date.now,
    required: true,
  }
});

module.exports = mongoose.model("data", DataSchema);