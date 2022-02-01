const service = require("./service.reviews");
const checkReview = require("./validation/checkReview")

async function list(req, res) {
  const data = await service.listReviewsForMovie(req.params.movieId);
  res.json({ data });
}

async function destroy(req, res) {
  await service.destroy(req.params.reviewId);
  res.sendStatus(204);
}

module.exports = {
  list,
  delete: [ checkReview, destroy ],
};
