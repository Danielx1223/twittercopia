const http = require('http');

const app = require('./server');
const config = require('./server/ config');

const { port } = config;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`El servidor se está ejecutando en http://localhost:${port}/`);
});
