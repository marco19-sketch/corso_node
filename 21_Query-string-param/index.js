/*
21 Query String Parameter (URL param)

- esempio di query string
- aggiungere delle persone
- aggiungere rout d'esempio per la ricerca
- utilizziamo req.query
- search e limit
- gestire risultato vuoto

https://search.brave.com/search?q=juventus&rh_type=sp&view=games&comp_id=135&team_id=496
*/

const express = require("express");
const app = express();
const { prodotti } = require("../20_Route-param/prodotti.js");

app.get("/prodotti/search", (req, res) => {
  //   console.log(req.query);
  //   res.send("ciao");
  const { query, limit } = req.query;
  let prodottiFiltrati = [...prodotti];
  // non dimenticare di usare return per eseguire query ed uscire dalla function!!!
  if (query) {
    prodottiFiltrati = prodottiFiltrati.filter(prodotto => {
      return prodotto.nome.toLowerCase().startsWith(query);
    });
  }
  if (limit) {
    prodottiFiltrati = prodottiFiltrati.slice(0, Number(limit));
  }
  if (prodottiFiltrati.length < 1) {
    return res.status(200).json({ success: true, data: "no match found" });
  }
  res.json(prodottiFiltrati);
});

app.listen(3000);
