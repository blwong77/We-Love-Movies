const knex = require("../db/connection");

function readReview(review_id) {
  return knex("reviews").where({ review_id }).first();
}

function destroy(review_id) {
  return knex("reviews").where({ review_id }).del();
}

function update(updatedReview) {
  return knex("reviews")
    .select("*")
    .where({ review_id: updatedReview.review_id })
    .update(updatedReview)
    .then(() => readReview(updatedReview.review_id).then(addCritic))
}

function listReviewsForMovie(movieId) {
  return knex("reviews")
    .where({ movie_id: movieId })
    .then((reviews) => Promise.all(reviews.map(addCritic)));
}

async function addCritic(review) {
  review.critic = await readCritic(review.critic_id);
  return review;
}
function readCritic(critic_id) {
  return knex("critics").where({ critic_id }).first();
}

module.exports = {
  listReviewsForMovie,
  readReview,
  update,
  destroy,
};
