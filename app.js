const express = require("express");
const bodyParser = require("body-parser");
//const request = require("request");
const port = 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  //res.send("Server is running");
  res.sendFile(__dirname + "/signup.html");
});
app.post("/", (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;

  console.log(firstName, lastName, email);
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
