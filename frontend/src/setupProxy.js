const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // This is the path that you want to forward to your backend server
    createProxyMiddleware({
      target: 'http://localhost:5000', // This is the address of your backend server
      changeOrigin: true,
    })
  );
};
