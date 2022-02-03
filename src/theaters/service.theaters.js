const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");

const rpConfig = {
  movie_id: ["movies", null, "movie_id"],
  title: ["movies", null, "title"],
  runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
  rating: ["movies", null, "rating"],
  description: ["movies", null, "description"],
  image_url: ["movies", null, "image_url"],
  movie_created_at: ["movies", null, "created_at"],
  movie_updated_at: ["movies", null, "updated_at"],
};

const reduceTheatersMovies = reduceProperties("theater_id", rpConfig);

function listMovieAtTheaters(movieId) {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .select("*")
    .where({ movie_id: movieId })
    .andWhere({ is_showing: true });
}

/**
 * Get all movies and theaters together then call reduceProperties on that data
 *
 */

function listAllMoviesAtTheaters() {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id")
    .select(
      "*",
      "t.created_at as created_at",
      "t.updated_at as updated_at",
      "m.created_at as movie_created_at",
      "m.updated_at as movie_updated_at"
    )
    .where({ is_showing: true })
    .then(reduceTheatersMovies);
}

module.exports = {
  listAllMoviesAtTheaters,
  listMovieAtTheaters,
};
