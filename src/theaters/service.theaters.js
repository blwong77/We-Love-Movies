const knex = require("../db/connection")

function listMovieAtTheaters(movieId) {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .select("*")
    .where({movie_id: movieId})
    .andWhere({is_showing: true})
}

module.exports = {
  listMovieAtTheaters,
}