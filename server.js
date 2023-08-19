const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Replace with the actual target API URL
const targetApi = 'https://us-central1-involvement-api.cloudfunctions.net/';

app.use(
  '/api',
  createProxyMiddleware({
    target: targetApi,
    changeOrigin: true,
  }),
);

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
