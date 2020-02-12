const fs = require('fs');
const path = require('path');

const filesExtension = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/js',
  jpg: 'image/jpeg',
  png: 'image/png',
  json: 'application/json',
};

module.exports = (req, res) => {
  const endpoint = req.url;
  const ext = endpoint.split('.')[1];
  const url = endpoint.split('/');
  const filePath = path.join(__dirname, '..', '..', ...url);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1> Error 500: Internal Server Error! </h1>');
    } else {
      res.writeHead(200, { 'Content-Type': filesExtension[ext] });
      res.end(file);
    }
  });
};
