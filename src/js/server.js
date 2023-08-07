const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

const dbUrl = "mongodb://127.0.0.1:5500/My-data-Base";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
});

const db = client.db("meu_banco_de_dados");

app.post('/api/salvar_dados', (req, res) => {
  const dadosDoCliente = req.body

  db.collection('minha_colecao').insertOne(dadosDoCliente, (err, result) => {
    if (err) {
      console.error('Erro ao salvar')
    }
  })
})

app.get("/api/dados", (req, res) => {});

app.listen(3000, () => {
  console.log("Servidor na porta 5500");
});
