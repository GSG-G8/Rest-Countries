const fs = require('fs');
const path = require('path');


module.exports = (req, res) => {
  const filePath = path.join(__dirname, '..', 'countries.json');
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1> Error 500: Internal Server Error! </h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(file);
    }
  });
};
