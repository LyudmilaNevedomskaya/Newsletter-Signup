const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const port = 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  //res.send("Server is running");
  res.sendFile(__dirname + "/signup.html");
});
app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url = "https://us6.api.mailchimp.com/3.0/lists/6a67b3f895";
  const options = {
    method: "POST",
    auth: "mila:2d50512cedd7a2e080963c559c4c6aad-us6",
  };
  const request = https.request(url, options, function (response) {
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

//API Key
// 2d50512cedd7a2e080963c559c4c6aad-us6

//List ID
//6a67b3f895
