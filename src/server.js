const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server up and running" + PORT);
});
