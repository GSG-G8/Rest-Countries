const http = require('http');
const router = require('./router')

const port = process.argv.PORT || 5000;

const server = http.createServer(router);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Visit our server at localhost http://localhost:${port}

  `);
});
