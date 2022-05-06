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

const references = {
  //  ver quien escribió
  userID: {
    type: Schema.Types.ObjectId, //  enlazar el usuario con el tweet que publique.
    ref: 'user',
    required: true,
  },
};

const tweet = new Schema(Object.assign(fields, references), {
  timestamps: true, // pa que nos muestre fecha de creación y edición propio de schema, de la libreria de moongose
});

module.exports = { Model: mongoose.model('tweet', tweet), fields, references };
