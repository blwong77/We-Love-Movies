const service = require("./service.movies");

/**
 * Validation Imports
 */
const checkMovie = require("./validation/checkMovie");

async function list(req, res) {
  const { is_showing = false } = req.query;
  let data;
  is_showing
    ? (data = await service.listActiveMovies())
    : (data = await service.list());
  res.json({ data });
}

async function read(req, res) {
  res.json({ data: res.locals.movie });
}

module.exports = {
  list,
  read: [checkMovie, read],
};
