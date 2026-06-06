//cSpell: disable
//sync vs async
const { readFileSync, writeFileSync } = require("fs");
console.log("1.sync comincio");
const sync1 = readFileSync("./cartella/ciao.txt", "utf-8");
const sync2 = readFileSync("./cartella/prova.txt", "utf-8");

writeFileSync("./cartella/nuovo2.txt", "nuovo file 2");
console.log("2.sync ho finito");
console.log("3.sync inizio la task successiva\n\n");

// async
const { readFile, writeFile } = require("fs");
console.log("1.async comincio");
readFile("./cartella/ciao.txt", "utf-8", (error, result) => {
  //esegui, quando finisci, esegui call-back
  if (error) {
    console.log(error);
    return;
  }
  const ciao = result;
  //   console.log("async function", ciao);
  readFile("./cartella/nuovo.txt", "utf-8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const nuovo = result;
    // console.log("async function", nuovo);
    writeFile(
      "./cartella/nuovo.txt",
      "Sto scrivendo in modo asyncrono",
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        // console.log(
        //   "undefined perchè abbiamo soltanto scritto, NON letto >>>",
        //   result,
        // );
        console.log("2. async ho finito");
      },
    );
  });
});

console.log("3. async inizio la task successiva");
