const notFound = (req, res) =>
  res.status(404).json({ message: 'Route does not Exist' });

module.exports = notFound;
