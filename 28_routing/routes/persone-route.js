const express = require("express");
const router = express.Router();
const persone = require("../../19_express-json/persone");
console.log(persone);

router.get("/", (req, res) => {
  res.status(200).json({ status: 200, data: persone });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const persona = persone.find(pers => pers.id === id);

  if (!persona) {
    res.status(200).send(`<h1>persona inesistente</h1>`);
  }
  res.json(persona);
});

router.post("/", (req, res) => {
  console.log(req.body);

  // Add the new persona to the array
  const newPersona = req.body;
  persone.push(newPersona);

  res.status(200).json({ success: true, data: persone });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const persona = req.body;

  const index = persone.findIndex(pers => pers.id === id);
  console.log(req.body, "index", index);

  if (index === -1) {
    return res.status(404).send(`<h1>persona inesistente</h1>`);
  }
  persone[index] = persona;
  res.status(200).json({ success: true, data: persone });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  //più logico usare findIndex per identificare l'index del persona con l'id specificato
  const index = persone.findIndex(pers => pers.id === id);
  console.log("index:", index);
  if (index === -1) {
    return res.status(404).send(`<h1>persona inesistente</h1>`);
  }
  persone.splice(index, 1);
  res.status(200).json({ success: true, data: persone });
});

module.exports = router;
