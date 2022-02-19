const mongoose = require("mongoose"),
  { Schema } = mongoose,
  todoSchema = new Schema({
    name: {
      type: String,
    },
    done: {
      type: Boolean,
    },
  }),
  todo = mongoose.model("Todo", todoSchema);

module.exports = todo;
