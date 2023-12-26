const express = require("express");

const app = express();

app.get("hello", (req, res, next) => {
  res.json({
    message: "Hello",
  });
});

app.listen(8000, () => {
  console.log("App is running on port 8000");
});
