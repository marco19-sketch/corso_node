/*cSpell: disable

16 introduzione a Express

- pulizia progetto
- npm init
- installare express, nodemon (per installare nelle dev-depend usare --save-dev)
- import express
- gestire richieste pagine home, about, contatti
*/

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello world</h1>`);
});

app.get("/about", (req, res) => {
  res.send(`<h1>About</h1>`);
});

app.get("/contatti", (req, res) => {
  res.send(`<h1>Contatti</h1>`);
});

app.use((req, res) => {
  res.status(404).send(`<h1>Risorsa non trovata</h1>`);
});

app.listen(3000);
