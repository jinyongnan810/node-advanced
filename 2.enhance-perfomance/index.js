const express = require("express");
// every child has a threadpool of its own
const app = express();
const blockEventLoopForAWhile = async (duration) => {
  await new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
app.get("/", async (req, res) => {
  await blockEventLoopForAWhile(10000);
  res.send("hello");
});
app.get("/fast", async (req, res) => {
  res.send("fast");
});

app.listen(3000, () => {
  console.log("Server started.");
});
