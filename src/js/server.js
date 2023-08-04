const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

const dbUrl = "mongodb://127.0.0.1:5500/My-data-Base";

app.use(express.static("public"));

app.get("/api/dados", (req, res) => {});

app.listen(3000, () => {
  console.log("Servidor na porta 5500");
});


