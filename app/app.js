require("dotenv").config("../.env");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use([morgan("dev"), cors(), express.json()]);

app.get("/health", (_req, res) => {
  throw new Error("Error");
  res.status(200).json({ message: "Success" });
});

app.use((_req, _res, next) => {
  const error = new Error("Resource not found");
  error.status = 404;
  next(error);
});
app.use((error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status).json({
      message: error.message,
    });
  }
  res.status(500).json({
    message: "Something went Wrong!",
  });
});

module.exports = app;
