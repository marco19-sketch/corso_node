//cSpell: disable
//- gestire richiesta con routing e errore

// importare modulo HTTP
const http = require("http");

//creare il server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<h1>Home Page</h1>`);
  } else if (req.url === "/marco") {
    res.end(`<h1>Profilo Marco</h1>`);
  } else {
    res.end(`<h1>Not found 404</h1>
    <p><a href='/'>Torna alla Home Page</a></p>`);
  }
});

//mettere il server in ascolto
server.listen(3000);
