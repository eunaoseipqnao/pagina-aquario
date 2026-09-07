const http = require("http");
const fs = require("fs");
const path = require("path");
const root = __dirname;
const mime = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".png": "image/png" };
http.createServer((request, response) => {
  const requestPath = decodeURIComponent(request.url.split("?")[0]);
  const relative = requestPath === "/" ? "index.html" : requestPath.replace(/^[/\\]+/, "");
  const file = path.resolve(root, relative);
  if (!file.startsWith(root)) return response.writeHead(403).end("Forbidden");
  fs.readFile(file, (error, data) => {
    if (error) return response.writeHead(404).end("Not found");
    if (relative === "index.html") {
      const html = data.toString("utf8")
        .replace("</head>", '<script src="meta-pixel.js"></script><link rel="stylesheet" href="v3.css"><link rel="stylesheet" href="v4.css"><link rel="stylesheet" href="v5.css"><link rel="stylesheet" href="v6.css"><link rel="stylesheet" href="v7.css"><link rel="stylesheet" href="v8.css"><link rel="stylesheet" href="v10.css"><link rel="stylesheet" href="v11.css"><link rel="stylesheet" href="v11b.css"><link rel="stylesheet" href="v12.css"><link rel="stylesheet" href="v13.css"><link rel="stylesheet" href="v14.css"><link rel="stylesheet" href="v15.css"><link rel="stylesheet" href="v16.css"></head>')
        .replace("<body>", '<body><noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=3744476052370214&ev=PageView&noscript=1" alt=""></noscript>')
        .replace("</body>", '<script src="v4.js"></script><script src="v5.js"></script><script src="v6.js"></script><script src="v7.js"></script><script src="v8.js"></script><script src="v10.js"></script><script src="v11.js"></script><script src="v12.js"></script><script src="v15.js"></script><script src="v16.js"></script><script src="checkout-link.js"></script></body>');
      response.writeHead(200, { "Content-Type": mime[".html"] });
      return response.end(html);
    }
    response.writeHead(200, { "Content-Type": mime[path.extname(file)] || "application/octet-stream" });
    response.end(data);
  });
}).listen(5173, "127.0.0.1", () => console.log("Landing page: http://localhost:5173"));
