/*
22 Middleware
- cosa sono? funzioni che vengono eseguite durante Ia richiesta
- come funziona? req --> middleware (next/res) --> middleware --> res
- creiamo un middleware d'esempio per due endpoint (req, res, next)
- il parametro next
- rendiamo il middleware un modulo
- app.use
- app.use solo per alcuni percorsi
- multiple funzioni middleware app.use( [func1, func2])
- interrompere il flusso con un middleware (esempio autorizzazione)
- middleware custom / express (static) / terze parti (da installare)

*/

const express = require("express");
const app = express();
const port = 3000;
const middleware = require("./middlewareMod");
const { prodotti } = require("../20_Route-param/prodotti");
const auth = require("./auth");

const middlewareProva = (req, res, next) => {
  const { method, url } = req;
  const time = new Date().getMinutes();
  console.log(method, url, time);
  //il parametro next, senza il quale il mid-ware non passa 'la palla'
  //   res.send("middleware-no next()");
  next();
};

//  rendiamo il middleware un modulo - vedi file middleware-mod.js

// app.use per usare i middleware direttamente sulla app e non doverli aggiungere a tutte le route
// app.use(middleware, middlewareProva);
// multiple funzioni middleware app.use( [func1, func2])
app.use([middleware, middlewareProva]);

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/about", (req, res) => res.send("about"));
// app.get("/", [middlewareProva, middleware], (req, res) =>
//   res.send("Hello World!"),
// );
// app.get("/about", middlewareProva, middleware, (req, res) => res.send("about"));

// app.use solo per alcuni percorsi
app.use("/prodotti", middleware);
app.get("/prodotti", (req, res) => res.json(prodotti));
app.get("/prodotti/:id", (req, res) => {
  const { id } = req.params;
  const prodottoSing = prodotti.find(prod => prod.idProdotto === id);
  if (!prodottoSing) {
    // return res.status(404).send(`<h1>prodotto non trovato</h1>`);
    return res.status(404).json({ messaggio: "Non trovato", code: 404 });
  }
  res.json(prodottoSing);
});

//  interrompere il flusso con un middleware (esempio autorizzazione)
app.use(auth);

app.get("/private", (req, res) => {
  res.send("Accesso autorizzato");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
