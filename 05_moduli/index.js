//cSpell: disable

// moduli
// - cosa sono i moduli (codice incapsulato) interni,
// - esempio di modulo
// - esportare con module.exports
// - importare modulo con require
// - sintassi alternativa
// - funzioni invocate da require
// built-in,
// esterni

const saluta = require("./utils");
const nomi = require("./nomi"); //esegue anche il for loop presente in 'nomi.js'

console.log(nomi);

// saluta("Anna");
// saluta(nomi.persona1);
// saluta(nomi.persona2);

// - funzioni invocate da require
require("./utils"); //le funzioni devono essere chiamate nel modulo/file di provenienza per funzionare !!
