const service = require("./service.theaters");

async function list(req, res) {
  const { movieId } = req.params;
  const data = await service.listMovieAtTheaters(movieId);
  res.json({ data });
}

module.exports = {
  list,
};
