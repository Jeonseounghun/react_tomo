const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/", {
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/startup", {
      target: "https://platum.kr/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/see/", {
      target: "https://www.bizinfo.go.kr/",
      changeOrigin: true,
    })
  );
};
