const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const dbConfig = require("./config/db");
class Server {
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors()); // Modify According To The Use Case
    this.app.use(helmet());
    routes.forEach((router, path) => {
      this.app.use(path, router);
    });
    this.app.listen(5000, (err) => {
      if (!err) console.log("running successfully");
      else console.log(err);
    });
  }

  async connect() {
    try {
      await mongoose.connect(dbConfig.url);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Server;
