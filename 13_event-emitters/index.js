/* cSpell: disable

13 Event emitters
- introduzione event driven programing (client/ server)
- importare modulo events
- creare un eventEmitter
- metodi on e emit
- passare valori
*/

const EventEmitter = require("events"); //import 'events'

const customEmitter = new EventEmitter(); // creiamo un EventEmitter

customEmitter.on("messaggio", () => {
  //attivazione evento .on
  //.on va sempre prima di .emit
  console.log("Changed");
});

customEmitter.on("messaggio", () => {
  console.log("Ciao");
});

customEmitter.on("messaggio", () => {
  console.log("Arrivederci");
});

customEmitter.emit("messaggio"); //emissione evento
//usato per massivamente nelle chat o i social e le notifiche etc..

//passare i valori
customEmitter.on("messaggio2", messaggio2 => {
  console.log(messaggio2);
});

customEmitter.emit("messaggio2", "Ciao, questo è il messaggio2");

customEmitter.on("notifica", (nome, anno) => {
  console.log(`Ciao, sono ${nome} e vengo dall'anno ${anno}`);
});

customEmitter.on("notifica", nome => {
  console.log(`Ciao, sono ${nome} e basta`);
});

customEmitter.emit("notifica", "Marco", 3026);

customEmitter.emit("notifica", "Gigi", 20026);
