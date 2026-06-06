// cSpell: disable

// const persona1 = "Luca";
module.exports.persona1 = "Luca"; // sintassi alternativa
const persona2 = "Marco";
const persona3 = "Luigi"; //scegliamo noi COSA esportare

// module.exports = { persona1, persona2 };
// module.exports.persona2 = persona2; // sintassi alternativa
module.exports.personaX = persona2; // sintassi alternativa

for (i = 0; i < 5; i++) {
  // questo viene eseguito quando invochiamo il modulo con require
  console.log(i);
}
