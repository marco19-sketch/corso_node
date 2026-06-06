//cSpell: disable

const prodotti = [
  {
    idProdotto: "1",
    nome: "Smartphone Galaxy S23",
    marca: "Samsung",
    prezzo: 899.99,
    categoria: "Smartphone",
    descrizione: 'Display Dynamic AMOLED 6.1", 256GB, fotocamera 50MP',
    disponibile: true,
    recensioni: [
      {
        idRecensione: "101",
        utente: "Marco Bianchi",
        voto: 5,
        commento: "Fotocamera incredibile, batteria duratura",
        data: "2024-01-15",
      },
      {
        idRecensione: "102",
        utente: "Giulia Neri",
        voto: 4,
        commento: "Ottimo smartphone, peccato il prezzo alto",
        data: "2024-01-20",
      },
    ],
  },
  {
    idProdotto: "2",
    nome: "Notebook MacBook Air",
    marca: "Apple",
    prezzo: 1299.99,
    categoria: "Computer",
    descrizione: 'Chip M2, 8GB RAM, 256GB SSD, 13.6"',
    disponibile: true,
    recensioni: [
      {
        idRecensione: "201",
        utente: "Luca Ferrari",
        voto: 5,
        commento: "Leggerissimo e potente, durata batteria eccezionale",
        data: "2024-02-01",
      },
      {
        idRecensione: "202",
        utente: "Sofia Romano",
        voto: 5,
        commento: "Perfetto per l'università, lo adoro",
        data: "2024-02-05",
      },
      {
        idRecensione: "203",
        utente: "Alessio Gallo",
        voto: 4,
        commento: "Schermo fantastico, ma poche porte",
        data: "2024-02-10",
      },
    ],
  },
  {
    idProdotto: "3",
    nome: "Cuffie WH-1000XM5",
    marca: "Sony",
    prezzo: 349.99,
    categoria: "Audio",
    descrizione: "Cuffie wireless con cancellazione rumore, batteria 30h",
    disponibile: true,
    recensioni: [
      {
        idRecensione: "301",
        utente: "Chiara Esposito",
        voto: 5,
        commento: "Migliori cuffie mai provate, cancellazione rumore pazzesca",
        data: "2024-01-18",
      },
      {
        idRecensione: "302",
        utente: "Davide Conti",
        voto: 5,
        commento: "Audio cristallino, comode anche per lunghe sessioni",
        data: "2024-01-22",
      },
    ],
  },
  {
    idProdotto: "4",
    nome: "Smartwatch Series 8",
    marca: "Apple",
    prezzo: 429.99,
    categoria: "Wearable",
    descrizione: "GPS, misurazione ECG, sempre-on display",
    disponibile: false,
    recensioni: [
      {
        idRecensione: "401",
        utente: "Elisa Martini",
        voto: 4,
        commento: "Molto preciso nel tracking delle attività",
        data: "2024-02-08",
      },
    ],
  },
  {
    idProdotto: "5",
    nome: "Tablet iPad Air",
    marca: "Apple",
    prezzo: 699.99,
    categoria: "Tablet",
    descrizione: '10.9", 64GB, chip M1, compatibile con Apple Pencil',
    disponibile: true,
    recensioni: [
      {
        idRecensione: "501",
        utente: "Federico De Luca",
        voto: 5,
        commento: "Perfetto per disegnare e prendere appunti",
        data: "2024-01-25",
      },
      {
        idRecensione: "502",
        utente: "Martina Rizzo",
        voto: 4,
        commento: "Ottimo prodotto, ma la memoria parte bassa",
        data: "2024-01-30",
      },
      {
        idRecensione: "503",
        utente: "Giorgio Ferri",
        voto: 5,
        commento: "Lo uso per lavoro, sostituisce perfettamente il PC",
        data: "2024-02-12",
      },
    ],
  },
];

module.exports = prodotti;
