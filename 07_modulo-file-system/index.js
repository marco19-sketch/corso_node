/* cSpell: disable

07 Modulo FS file system

- FS sincrono (readFiIeSync, writeFileSync)
- Leggere file, scrivere in file (override e append con {flag: a)),
- FS asincrono (readFi1e, writeFile)
- sync vs async (blocking code vs non-blocking code)
*/

//sync
const { error } = require("console");
const { readFileSync, writeFileSync } = require("fs"); //scompattiamo direttamente le due funzioni

const prova = readFileSync("./cartella/prova.txt", "utf-8"); //opzione 'utf-8' necessaria !!
const ciao = readFileSync("./cartella/ciao.txt", "utf-8");
console.log(prova, "\n", ciao);

writeFileSync(
  "./cartella/prova.txt",
  "sto (sovra)scrivendo nel file prova.txt.",
);
console.log(prova, "\n", ciao);

writeFileSync(
  "./cartella/prova.txt",
  " Ora sto 'appendendo' testo nel file prova.txt",
  { flag: "a" },
);

//scrivere e creare nuovo file
writeFileSync(
  "./cartella/nuovo.txt",
  "Qusto file è stato creato usando la funzione built-in writeFileSync",
);

const nuovo = readFileSync("./cartella/nuovo.txt", "utf-8"); //opzione 'utf-8' necessaria !!
console.log(nuovo);

// async
const { readFile, writeFile } = require("fs");

readFile("./cartella/ciao.txt", "utf-8", (error, result) => {
  //esegui, quando finisci, esegui call-back
  if (error) {
    console.log(error);
    return;
  }
  const ciao = result;
  console.log("async function", ciao);
  readFile("./cartella/nuovo.txt", "utf-8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const nuovo = result;
    console.log("async function", nuovo);
    writeFile(
      "./cartella/nuovo.txt",
      "Sto scrivendo in modo asyncrono",
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(
          "undefined perchè abbiamo soltanto scritto, NON letto >>>",
          result,
        );
      },
    );
  });
});
