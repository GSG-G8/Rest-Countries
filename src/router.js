const homeHandler = require('./handlers/homeHandler');
const apiHandler = require('./handlers/apiHandler');
const staticHandler = require('./handlers/staticHandler');


const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    homeHandler(req, res);
  } else if (endpoint === '/countries') {
    apiHandler(req, res);
  } else if (endpoint.includes('public')) {
    staticHandler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1> Error 404: Not Found! </h1>');
  }
};

module.exports = router;
