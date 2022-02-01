const knex = require("../db/connection");

function readCritic(critic_id) {
  return knex("critics").where({ critic_id }).first();
}

function readReview(review_id) {
  return knex("reviews").where({ review_id }).first();
}

function listReviewsForMovie(movieId) {
  return knex("reviews")
    .select("*")
    .where({ movie_id: movieId })
    .then((reviews) => {
      return reviews.map(async (review) => {
        review.critic = await readCritic(review.critic_id);
        return review;
      });
    });
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
