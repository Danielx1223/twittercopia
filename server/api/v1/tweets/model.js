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

const virtuals = {
  comments: {
    // Estoy trayendo los comentarios y comparando el _id con el tweetID
    ref: 'comment',
    localField: '_id',
    foreignField: 'tweetID', // OKO QUE ID ESTA EN MAYUSCULA Y EL PROFE LO PONE CON MINUSCULA
  },
};

const tweet = new Schema(Object.assign(fields, references), {
  timestamps: true, // pa que nos muestre fecha de creación y edición propio de schema, de la libreria de moongose
  toJSON: {
    virtuals: true,
  },
});

tweet.virtual('comments', virtuals.comments);

module.exports = {
  Model: mongoose.model('tweet', tweet),
  fields,
  references,
  virtuals,
};
