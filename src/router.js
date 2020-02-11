const fs = require('fs');
const path = require('path');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (err, file) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1> Error 500: Not Found! </h1>');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(file);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1> Error 404: Not Found! </h1>');
  }
};

module.exports = router;
