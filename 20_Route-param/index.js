/*cSpell: disable

20 Route Param
- mapping per non mandare tutti i dati
- come richiedere i dati di un oggetto specifico (hardcode)
- richiedere singolo elemento con Route Parameter
- id number vs string
- gestione param non esistente
- esempio route param complessi
*/

const express = require("express");
const app = express();

const { persone } = require("../19_express-json/persone.js");
const { prodotti } = require("./prodotti.js");

app.get("/", (req, res) => {
  res.send(`<h1>Homepage</h1><a href='persone'>Vai a persone</a>`);
});

//mapping per non mandare tutti i dati
app.get("/persone", (req, res) => {
  const nuovePersone = persone.map(persona => {
    const { nome, cognome, eta } = persona;
    return { nome, cognome, eta };
  });
  res.json(nuovePersone);
});

//come richiedere i dati di un oggetto specifico (hardcode)
// app.get("/persone/1", (req, res) => {
//   const persona = persone.find(persona => persona.id === "1");
//   res.json(persona);
// });

// richiedere singolo elemento con Route Parameter
app.get("/persone/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  // const personId = req.params.id // se rinominiamo il parametro
  const persona = persone.find(persona => persona.id === id);
  //id number vs string
  //const persona = persone.find(persona => persona.id === Number(id));

  //gestione param non esistente
  if (!persona) {
    // return res.status(404).send(`<h1>prodotto non trovato</h1>`);
    return res.status(404).json({ messaggio: "Non trovato", code: 404 });
  }
  res.json(persona);
});

app.get("/prodotti/:id", (req, res) => {
  const { id } = req.params;
  const prodotto = prodotti.find(prodotto => prodotto.idProdotto === id);
  if (!prodotto) {
    // return res.status(404).send(`<h1>prodotto non trovato</h1>`);
    return res.status(404).json({ messaggio: "Non trovato", code: 404 });
  }
  res.json(prodotto);
});

// esempio route param complessi (non completo, provo a completarlo io)
app.get("/prodotti/:id/recensioni/:idRec", (req, res) => {
  const { id } = req.params;
  const { idRec } = req.params;
  const recensione = prodotti
    .find(prodotto => prodotto.idProdotto === id)
    .recensioni.find(recensione => recensione.idRecensione === idRec);
  // const prodotto = prodotti.find(prodotto => prodotto.idProdotto === id);
  // const recensione = prodotto.recensioni.find(
  //   recensione => recensione.idRecensione === idRec,
  // );
  if (!recensione) {
    // return res.status(404).send(`<h1>prodotto non trovato</h1>`);
    return res
      .status(404)
      .json({ messaggio: "Recensione non trovata", code: 404 });
  }
  res.json(recensione);
});

app.listen(3000);
