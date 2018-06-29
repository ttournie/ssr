import Express from "express";
import http from "http";
import path from "path";
import controller from "./controller";
const PORT = process.env.PORT || 8000;

const isProd = process.env.NODE_ENV === "production";
const app = new Express();
const server = new http.Server(app);

// Main route for pages
app.use(Express.static(path.resolve(__dirname, "../../build/static")));
app.get("*", controller());

// Start the HTTP server
server.listen(PORT, err => {
  if (err) {
    console.log(`Could NOT start server on port ${PORT}`, err);
  } else {
    console.log(`Listening on port ${PORT}`);
  }
});
