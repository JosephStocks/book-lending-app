const express = require("express");
const app = express();
const PORT = process.env.PORT || 3010;
const path = require("path");

// app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Book lending server listening on ${PORT}`);
});
