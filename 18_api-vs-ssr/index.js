/*cSpell: disable
18 api vs ssr

- API: interfaccia per comunicare con il DB (json, res.json)
- SSR: server side rendering (template, ejs, res.render)

API
client (sito, webapp, app smartphone) --> richiesta dati --> API --> interroga DB -->
API --> manda risposta con dati --> client manda a schermo

SSR
Client --> richiede pagina --> server --> renderizza pagina con dati all'interno
server --> manda la pagina html completa --> client la mostra
*/
