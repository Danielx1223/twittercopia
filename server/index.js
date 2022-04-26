const express = require('express');
const api = require('./api/v1');

const app = express();

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
  const { message = ' ', statusCode = 500 } = err; // para darle valor al err.
  res.status(statusCode); // Esto es meter en un solo middleware
  res.json({
    message,
  });
});

module.exports = app;
