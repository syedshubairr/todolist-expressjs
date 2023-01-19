const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

var items = ["Boy Food", "Laptop Charge", "Project"];

app.listen(4000, function () {
  console.log("Server listening on Port-4000");
});

app.get("/", function (req, res) {
  console.log("On homepage");

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  var today = new Date();
  var day = today.toLocaleDateString("en-US", options);
  res.render("list", { dayname: day, newListItem: items });
});

app.post("/", function (req, res) {
  // everytime using the res.render we have to send all the values in the EJS file
  // so by sending all the values again and again, we will not do that,
  // instead we will redirect it to the home route.
  //res.render("list", {newListItem : req.body.add});
  var item = req.body.add;

  console.log(item);

  items.push(item);

  res.redirect("/");
});
