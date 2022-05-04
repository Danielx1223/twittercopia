const express = require('express');
const api = require('./api/v1');

const app = express();

app.use(express.json()); // Se encarga de coger los JSON de la petición y guardarla (esta en controllers)

app.use('/api/v1', api); // LLamo todo lo que este en api, usando la ruta /api/ y lo que está en la otra carpeta

// Errores
app.use((req, res, next) => {
  next({
    message: 'Route Not Found',
    statusCode: 404,
  });
});

app.use((err, req, res, next) => {
  // errores que siempre pueden salir, es mejor tenerlos siempre por si aca.
  const { message = ' ' } = err; // para darle valor al err.
  let { statusCode = 500 } = err;

  if (err.name === 'ValidationError') {
    // Esto es cuando es un error por moongose que es de parte del cliente.
    statusCode = 400;
  }

  res.status(statusCode); // Esto es meter en un solo middleware
  res.json({
    message,
  });
});

module.exports = app;
