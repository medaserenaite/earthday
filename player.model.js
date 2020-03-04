var mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Player Schema with its fields
let Player = new Schema({
  name: {
    type: String,
    required: true,
  },
  qr_id:{
    type: String,
  },
  points: {
    type: Number,
  },
  askedArray:{
    type: Array,
  },
  correctAnswers:{
    type: Number,
  },
  admin:{
    type: Boolean,
  }
});

module.exports = mongoose.model('Player', Player);
