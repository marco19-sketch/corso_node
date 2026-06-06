/*
23 Postman

- esempio get, post, res.json, put e delete
*/

const express = require("express");
const app = express();
const port = 3000;

// per visualizzare il body del post (nel terminal in questo caso)
// ci permette di leggere i json in entrata
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Homepage");
});
app.get("/utente", (req, res) => {
  res.json({ nome: "Marco", cognome: "Brusca" });
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Posted");
});

app.put("/", (req, res) => {
  console.log(req.body);
  res.send("Updated");
});

app.patch("/", (req, res) => {
  console.log(req.body);
  res.send("patched");
});

app.delete("/", (req, res) => {
  res.send("ok delete");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
