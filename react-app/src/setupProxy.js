const { createProxyMiddleware } = require('http-proxy-middleware');
const { port } = require ('../../server.js')
module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: `http://localhost:${port}`,
      changeOrigin: true,
    })
  );
};