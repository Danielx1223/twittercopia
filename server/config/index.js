require('dotenv').config(); // uso libreria dotenv para leer la variable de entorno PORT

const config = {
  port: process.env.PORT,
  database: {
    protocol: process.env.DB_PROTOCOL,
    url: process.env.DB_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
};

module.exports = config;
