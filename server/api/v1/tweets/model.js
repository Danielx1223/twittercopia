// Nos permite decir que tipo de variable tendremos en la base de datos

const mongoose = require('mongoose');
const { Schema } = mongoose;

const fields = {
  content: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 255,
  },
  likes: {
    type: Number,
    default: 0,
  },
};

const tweet = new Schema(fields, {
  timestamps: true, // pa que nos muestre fecha de creación y edición propio de schema, de la libreria de moongose
});

module.exports = { Model: mongoose.model('tweet', tweet), fields };
