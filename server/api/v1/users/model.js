// Nos permite decir que tipo de variable tendremos en la base de datos

const mongoose = require('mongoose');
const { hash, compare } = require('bcryptjs');

const { Schema } = mongoose;

const fields = {
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
};

const user = new Schema(fields, {
  timestamps: true, // pa que nos muestre fecha de creación y edición propio de schema, de la libreria de moongose
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
});

user.virtual('name').get(function () {
  // creando el virtual que es la union del nombre y last name
  return this.firstname + ' ' + this.lastname;
});

// PASSWORD ENCRIPTAR
user.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    // this reemplaza documento que está usando esa función.
    this.password = await hash(this.password, 10); // la salt es 10
  }
  next();
});

user.methods.verifyPassword = function (password) {
  return compare(password, this.password);
};

user.methods.toJSON = function () {
  const doc = this.toObject(); // creo un objeto, le borro la contraseña y muestro el objeto.
  delete doc.password;
  return doc;
};

module.exports = { Model: mongoose.model('user', user), fields };
