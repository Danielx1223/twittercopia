const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome API',
  });
});

// Errores
app.use((req, res, next) => {
  next({
    message: 'Route Not Found',
    statusCode: 404,
  });
});

app.use((err, req, res, next) => {
  // errores que siempre pueden salir, es mejor tenerlos siempre por si aca.
  const { message = 'Prueba', statusCode = 500 } = err; // para darle valor al err.
  res.status(statusCode); // Esto es meter en un solo middleware
  res.json({
    message,
  });
});

module.exports = app;
