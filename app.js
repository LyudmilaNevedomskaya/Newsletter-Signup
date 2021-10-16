const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const port = 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  //res.send("Server is running");
  res.send("HELLO ME");
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
