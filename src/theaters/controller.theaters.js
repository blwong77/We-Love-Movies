const service = require("./service.theaters");

async function list(req, res) {
  const { movieId } = req.params;
  const data = movieId
    ? await service.listMovieAtTheaters(movieId)
    : await service.listAllMoviesAtTheaters();
  res.json({ data });
}

module.exports = {
  list,
};
