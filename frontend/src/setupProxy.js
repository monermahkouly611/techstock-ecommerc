const { createProxyMiddleware } = require('http-proxy-middleware');

const target = process.env.BACKEND_URL || 'http://localhost:3001';

module.exports = function(app) {
  // Proxy API calls and uploaded images to the backend (dev server only)
  app.use(
    ['/api', '/uploads'],
    createProxyMiddleware({
      target,
      changeOrigin: true,
      credentials: true, // Enable credentials for session cookies
    })
  );
};
