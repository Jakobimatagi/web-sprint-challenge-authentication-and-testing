module.exports = (req, res, next) => {
  //req.session.user is coming from where we added in Login.
  if (req.session && req.session.user) {
      next();

  } else {
      res.status(401).json({ message: 'You need to login.' })
  }
}
