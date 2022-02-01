const knex = require("../db/connection");

function readCritic(critic_id) {
  return knex("critics").where({ critic_id }).first();
}

function readReview(review_id) {
  return knex("reviews").where({ review_id }).first();
}

async function addCritic(review) {
  review.critic = await readCritic(review.critic_id);
  return review;
}

function listReviewsForMovie(movieId) {
  return knex("reviews")
    .where({ movie_id: movieId })
    .then((reviews) => Promise.all(reviews.map(addCritic)));
}

function destroy(review_id) {
  return knex("reviews").where({ review_id }).del();
}

module.exports = {
  listReviewsForMovie,
  readCritic,
  readReview,
  destroy,
};
