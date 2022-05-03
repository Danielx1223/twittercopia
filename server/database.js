const mongoose = require('mongoose');
// Conectar y desconectar de la base de datos ( la ruta está en la documentación)
exports.connect = function ({
  protocol = 'mongodb',
  url = '',
  username,
  password,
}) {
  let dburl = '';
  if (username && password) {
    // undefine entra a false.
    dburl = `${protocol}://${username}:${password}@${url}`;
  } else {
    dburl = `${protocol}://${url}`;
  }

  mongoose.connect(dburl);

  mongoose.connection.on('open', function () {
    console.log('Database connected');
  });

  mongoose.connection.on('close', function () {
    console.log('Database disconnected');
  });

  mongoose.connection.on('error', function (error) {
    console.error(error);
  });
  process.on('SIGINT', function () {
    // Por si hacen un ^C se salga de la base de datos
    mongoose.disconnect.close(() => {
      console.log('Database disconnected');
    });
  });
};

exports.disconnect = function () {
  mongoose.disconnect.close(() => {
    console.log('Database disconnected');
  });
};
