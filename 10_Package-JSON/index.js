/*cSpell: disable

10 Package JSON
- package.json un file manifest con le info del nostro progetto
- come crearlo? manualmente, npm init. npm init -y
- come composto?
- instelliamo una dipendenza d'esempio: lodash e bootstrap
- importiamo e usiamo lodash
- disinstallara pacchetti con npm uninstall oppure eliminando package-lock, node-modules e dependency
- package-lock.json
- spiegazione versioni x.y.z major-minor-patch
*/

//test module lodash
const _ = require("lodash");

const oggetti = [1, [2, [3, [4]]]];

const oggetti2 = _.flatMapDeep(oggetti);

console.log(oggetti, "\n", oggetti2);
