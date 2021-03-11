
const proxy = require('http-proxy-middleware');

var cors = require('cors');

const apiUrl = process.env.REACT_APP_API_URL

module.exports = function(app) {
    console.log(apiUrl)
    app.use(cors());
    app.use(
        proxy('/api', { target:  process.env.REACT_APP_API_URL })
      );
}