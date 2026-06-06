//cSpell: disable
// 06 moduli built-in

// - cosa sono i moduli built-in
// - importare modulo OS
// - userinfo,uptime, version, arch
// - importare modulo path
// - separator, join (con sottocartelle),basename, resolve (percorsi assoluti)

//modulo os
const os = require("os");

console.log(os.userInfo());

console.log(os.uptime());

console.log(os.version());

console.log(os.arch());

const info = {
  nome: os.type(),
  release: os.release(),
  memoria: os.totalmem(),
  disponibile: os.freemem(),
};

console.log(info);

// path
const path = require("path");

// separatore
console.log("separatore", path.sep);

//join
const percorsoFile = path.join(
  "./06_built-in",
  "/folder",
  "subfolder",
  "prova.txt",
);

console.log(percorsoFile);

//basename
console.log("basename", path.basename(percorsoFile));

//resolve (path assoluto)
const percorsoAssoluto = path.resolve(
  __dirname,
  "folder",
  "subfolder",
  "prova.txt",
);
console.log("percorso assoluto", percorsoAssoluto);
