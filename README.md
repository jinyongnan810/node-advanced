### Node Background

- Node bases on V8(execute javascript code) and livuv(native functions)
- [Example](https://github.com/nodejs/node/blob/master/lib/internal/crypto/pbkdf2.js)
- Node's event-loop is single threaded. But inside the libuv, there is a thread pool to be used by some framework to support things like callbacks.
