const express = require("express");
const cluster = require("cluster");
/*
This Clustering works in this situation:
* access a slow route and a fast one simultaneously
This Clustering will not work in this situation:
* access a slow route 2 times simultaneously
*/

/* 
Cluster Child Number:
* If cluster childs are more than the CPU core, it will average the performance because CPUs are switching between each child.
    Which means the first request supposed to be finished will finish about the same time with the last-supposed-to-be-finished.
*/
if (cluster.isMaster) {
  for (let i = 0; i < 4; i++) {
    // create child
    cluster.fork();
  }
} else {
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
}
