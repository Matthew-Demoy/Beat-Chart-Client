
const proxy = require('http-proxy-middleware');

var cors = require('cors');

const apiUrl = process.env.REACT_APP_API_URL

module.exports = function(app) {
  
    app.use(
        proxy('/api', { target:  apiUrl })
      );
}