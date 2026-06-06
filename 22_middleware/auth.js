const auth = (req, res, next) => {
  const { user } = req.query;

  if (user === "Luca") {
    next();
  } else {
    res.status(401).send("Non autorizzato");
  }
  console.log("Accesso effettuato");
};

module.exports = auth;
