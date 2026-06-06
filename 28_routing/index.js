/*
28 Routing
- creare file per router
- importare modulo
- utilizzare il router
- esempio con piü routes
*/

const express = require("express");
const app = express();
const port = 3000;
const prodottiRoutes = require("./routes/prodotti-route");
const personeRoutes = require("./routes/persone-route");

app.use(express.json());

app.use("/api/prodotti", prodottiRoutes);
app.use("/api/persone", personeRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
