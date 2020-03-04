const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    name: {
      type: String,
      required: true,
    },
    password: {
        type: String,
    },
    points: {
      type: Number,
    },
  });
  
  module.exports = mongoose.model('User', User);
  