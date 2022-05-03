// Archivo sólo para llamar el http y hacer esto modular.
const http = require('http');

const app = require('./server'); // Traer de la carpeta server el modulo de app
const config = require('./server/config'); // traer de la carpeta config el modulo config
const database = require('./server/database'); // Database

// connect to database
database.connect(config.database);

// Create Web Server
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`El servidor se está ejecutando en ${config.port}`);
});
