const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const data = [];

data.push({
  name: "praveen",
  age: 30,
},
{
  name: "rakesh",
  age: 12,
},
{
  name: "victor",
  age: 30,
});

app.get("/user", (req, res) => {
  res.send(data);
});

app.post("/user", (req, res) => {
  data.push(req.body);
  res.send(data);
});

app.get("/news", (req, res) => {
  fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=091799ce8a63416e9db0530ba9786a97`)
  .then(response => response.json())
  .then(data => console.log(data));
  res.send(data);
});

app.listen(3030, () => {
  console.log("server started on port 3030");
});
