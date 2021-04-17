const express = require("express");
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

app.listen(3000, () => {
  console.log("Server started.");
});
