const middlewareMod = (req, res, next) => {
  const { method, url } = req;
  const time = new Date().getMinutes();
  console.log("this is coming from the middleware-mod.js", method, url, time);
  //il parametro next, senza il quale il mid-ware non passa 'la palla'
  //   res.send("middleware-no next()");
  next();
};

module.exports = middlewareMod;
