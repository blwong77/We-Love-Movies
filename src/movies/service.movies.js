const knex = require("../db/connection");

function list() {
  return knex("movies").select("*");
}
function listActiveMovies() {
  return knex("movies as m")
    .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
    .select(
      "m.movie_id as id",
      "m.title",
      "m.runtime_in_minutes",
      "m.rating",
      "m.description",
      "m.image_url"
    )
    .where({ is_showing: true })
    .groupBy("m.movie_id");
}

function read(movieId) {
  return knex("movies")
    .select("*")
    .where({ movie_id: movieId });
}

module.exports = {
  list,
  listActiveMovies,
  read,
};
