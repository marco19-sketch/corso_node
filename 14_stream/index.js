/*cSpell: disable

14 Streams
- cosa sono e come funzionano
- creare file pesante
- leggere il file senza stream
- leggere il file con stream
*/

//creare file pesante
// const { writeFileSync } = require("fs");
// for (let i = 0; i < 10000; i++) {
//   writeFileSync("./filegrande.txt", `Ciao riga numero ${i}\n`, { flag: "a" });
// }

//leggere il file pesante senza stream
const { readFileSync } = require("fs");

const filegrande = readFileSync("filegrande.txt");

console.log(filegrande); //il file arriva tutto intero

//leggerlo con stream
const { createReadStream } = require("fs");

const stream = createReadStream("filegrande.txt");

stream.on("data", result => {
  //il file viene diviso in chunks
  console.log(result);
});
