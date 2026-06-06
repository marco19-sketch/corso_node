/*cSpell: disable

19 express json

- ripasso veloce json
- pulire codice
- res json esempio
- res json con file esterno
*/

const express = require("express");
const app = express();

const { persone } = require("./persone");

app.get("/", (req, res) => {
  res.json(persone);
});

app.get("/about", (req, res) => {
  res.send("hello");
});

app.listen(3000);
