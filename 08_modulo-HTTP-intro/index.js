/*cSpell: disable

e8 Modulo HTTP introduzione

- serve per creare un web server
- importare http
- creare un server con risposta default
- mettere server in ascolto
- gestire richiesta con routing e errore
*/

// importare modulo HTTP
const http = require("http");

//creare il server
const server = http.createServer((req, res) => {
  res.write("Benvenuto sul nostro sito");
  res.end();
  //   console.log(req); accedi al sito per vedere il log nel terminal
});

//mettere il server in ascolto
server.listen(3000);
