const homeHandler = require('./handlers/homeHandler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    homeHandler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1> Error 404: Not Found! </h1>');
  }
};

module.exports = router;
