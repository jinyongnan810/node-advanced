const https = require("https");
const start = Date.now();
const doRequest = () => {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => console.log(Date.now() - start));
    })
    .end();
};

for (let i = 1; i < 10; i++) {
  doRequest();
}
// (libuv)not using thread pool, but OS Async helpers
// almost all of the network-related stuff use these OS Async helpers
