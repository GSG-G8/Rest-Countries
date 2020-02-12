const indexHandler = require('./handlers/index');


const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    indexHandler.homeHandler(req, res);
  } else if (endpoint.includes('public')) {
    indexHandler.staticHandler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1> Error 404: Not Found! </h1>');
  }
};

module.exports = router;
