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
};

const references = {
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  tweetID: {
    type: Schema.Types.ObjectId,
    ref: 'tweet',
    required: true,
  },
};

const comment = new Schema(Object.assign(fields, references), {
  timestamps: true, // pa que nos muestre fecha de creación y edición propio de schema, de la libreria de moongose
});

module.exports = {
  Model: mongoose.model('comment', comment),
  fields,
  references,
};
