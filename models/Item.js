var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  code: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  selled: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Item', ItemSchema);