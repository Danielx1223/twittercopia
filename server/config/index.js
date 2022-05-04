require('dotenv').config(); // uso libreria dotenv para leer la variable de entorno PORT

const config = {
  port: process.env.PORT,
  database: {
    protocol: process.env.DB_PROTOCOL,
    url: process.env.DB_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  pagination: {
    // cantidad de tweets que quiero ver
    limit: 10,
    skip: 0,
  },

  sort: {
    // ordenar por campos, ver documentación para ordenar.
    sortBy: {
      default: 'createdAt',
      fields: ['createdAt', 'updatedAt'],
    },
    direction: {
      default: 'desc',
      options: ['desc', 'asc'],
    },
  },
};

module.exports = config;
