const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this statusSchema is used to store all the boolean function / enable & disable functions

const statusSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    enabled: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Status", statusSchema);
