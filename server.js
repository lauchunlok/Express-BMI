const express = require("express");
const app = express();
const PORT = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  console.log(req.body);

  var bmi = Math.floor(weight / Math.pow(height, 2));

  res.send("Your BMI is " + bmi);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
