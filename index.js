const Server = require("./src/server");

try {
  const app = new Server();
  app.connect();
} catch (err) {
  console.log(err);
}
