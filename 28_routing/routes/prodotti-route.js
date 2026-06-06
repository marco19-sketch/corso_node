const express = require("express");
const router = express.Router();
const prodotti = require("../../20_Route-param/prodotti");
console.log(prodotti);

router.get("/", (req, res) => {
  res.status(200).json({ status: 200, data: prodotti });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const prodotto = prodotti.find(prod => prod.idProdotto === id);

  if (!prodotto) {
    res.status(200).send(`<h1>Prodotto inesistente</h1>`);
  }
  res.json(prodotto);
});

router.post("/", (req, res) => {
  console.log(req.body);

  // Add the new product to the array
  const newProduct = req.body;
  prodotti.push(newProduct);

  res.status(200).json({ success: true, data: prodotti });
});

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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

module.exports = router;
