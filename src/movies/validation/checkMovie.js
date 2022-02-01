const service = require("../service.movies");

async function checkMovie(req, res, next) {
  const { movieId } = req.params;
  const movie = await service.read(movieId);

  if (movie && movie.length !== 0) {
    res.locals.movie = movie[0];
    return next();
  }
  next({ status: 404, message: "Movie cannot be found." });
}

module.exports = checkMovie;
