const https = require("https");
const crypto = require("crypto");
const fs = require("fs");
const start = Date.now();
const doRequest = () => {
  // uses OS async helper
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => console.log(`HTTP:${Date.now() - start}`));
    })
    .end();
};
const hash = () => {
  // uses thread pool
  crypto.pbkdf2("a", "b", 100000, 512, "SHA512", () => {
    console.log("HASH:", Date.now() - start);
  });
};
const readfile = () => {
  // uses thread pool
  fs.readFile("multitask.js", () => {
    console.log("FS:", Date.now() - start);
  });
};

doRequest();
readfile();
hash();
hash();
hash();
hash();
/*
FS: (1) access file basic info, then (2)fetch the file.

thread taking care of fs switches task during (1), and another thread(after freed) pick up task again when (1) finishes 

HTTP:270
HASH: 848
FS: 850  
HASH: 857
HASH: 873
HASH: 954
*/
