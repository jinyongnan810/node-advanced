const crypto = require("crypto");
// libuv manages a thread pool that defaultly has 4 threads
// const start1 = Date.now();
// crypto.pbkdf2("a", "b", 100000, 512, "SHA512", () => {
//   console.log("1:", Date.now() - start1);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "SHA512", () => {
//   console.log("2:", Date.now() - start1);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "SHA512", () => {
//   console.log("3:", Date.now() - start1);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "SHA512", () => {
//   console.log("4:", Date.now() - start1);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "SHA512", () => {
//   console.log("5:", Date.now() - start1);
// });

// ***change thread pool size, but the result is not very comprehensible***
process.env.UV_THREADPOOL_SIZE = 6;
const start2 = Date.now();
crypto.pbkdf2("a", "b", 100000, 512, "SHA512", () => {
  console.log("1:", Date.now() - start2);
});
crypto.pbkdf2("a", "b", 100000, 512, "SHA512", () => {
  console.log("2:", Date.now() - start2);
});
crypto.pbkdf2("a", "b", 100000, 512, "SHA512", () => {
  console.log("3:", Date.now() - start2);
});
crypto.pbkdf2("a", "b", 100000, 512, "SHA512", () => {
  console.log("4:", Date.now() - start2);
});
crypto.pbkdf2("a", "b", 100000, 512, "SHA512", () => {
  console.log("5:", Date.now() - start2);
});
