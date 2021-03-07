
const proxy = require('http-proxy-middleware');

var cors = require('cors');

const apiUrl = process.env.API_URL

module.exports = function(app) {
    console.log(apiUrl)
    app.use(cors());
    app.use(
        proxy('/api', { target:  apiUrl || 'http://localhost:8080'})
      );
}