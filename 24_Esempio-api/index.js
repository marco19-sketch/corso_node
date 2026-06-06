/*
24, 25, 26, 27 Esempio API 

- GET /api/prodotti - tutte le prodotti
- GET /api/prodotti/:id - una prodotti specifica
- POST api/prodotti - inserire una prodotti
- PUT / api/prodotti/ : id - modificare prodotti
- DELETE (api/prodotti] : id - eliminare prodotti
*/

const express = require("express");
const app = express();
const port = 3000;
const prodotti = require("../20_Route-param/prodotti");

// this middleware parses JSON bodies
app.use(express.json());
// middleware per ricevere dati da un form
app.use(express.urlencoded({ extended: true }));

app.get("/api/prodotti", (req, res) => {
  res.status(200).json({ status: 200, data: prodotti });
});

app.get("/api/prodotti/:id", (req, res) => {
  const { id } = req.params;
  const prodotto = prodotti.find(prod => prod.idProdotto === id);

  if (!prodotto) {
    res.status(200).send(`<h1>Prodotto inesistente</h1>`);
  }
  res.json(prodotto);
});

app.post("/api/prodotti", (req, res) => {
  console.log(req.body);

  // Add the new product to the array
  const newProduct = req.body;
  prodotti.push(newProduct);

  res.status(200).json({ success: true, data: prodotti });
});

app.put("/api/prodotti/:id", (req, res) => {
  const { id } = req.params;
  const prodotto = req.body;

  const index = prodotti.findIndex(prod => prod.idProdotto === id);
  console.log(req.body, "index", index);

  if (index === -1) {
    return res.status(404).send(`<h1>Prodotto inesistente</h1>`);
  }
  prodotti[index] = prodotto;
  res.status(200).json({ success: true, data: prodotti });
});

app.delete("/api/prodotti/:id", (req, res) => {
  const { id } = req.params;
  //più logico usare findIndex per identificare l'index del prodotto con l'id specificato
  const index = prodotti.findIndex(prod => prod.idProdotto === id);
  console.log("index:", index);
  if (index === -1) {
    return res.status(404).send(`<h1>Prodotto inesistente</h1>`);
  }
  prodotti.splice(index, 1);
  res.status(200).json({ success: true, data: prodotti });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
