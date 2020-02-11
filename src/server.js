const http = require('http');

const port = process.argv.PORT || 5000;

const server = http.createServer();

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is listining to the port: ${port}`);
});
