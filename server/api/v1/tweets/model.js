// Nos permite decir que tipo de variable tendremos en la base de datos

const mongoose = require('mongoose');

const fields = {
  content: String,
  likes: Number,
};

module.exports = mongoose.model('tweet', fields);
