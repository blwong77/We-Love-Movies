const service = require("./service.reviews");
const checkReview = require("./validation/checkReview")

async function list(req, res) {
  const { movieId } = req.params;
  const data = await service.listReviewsForMovie(movieId);
  res.json({ data });
}

async function destroy(req, res) {
  const { reviewId } = req.params;
  await service.destroy(reviewId);
  res.sendStatus(204);
}

module.exports = {
  list,
  delete: [ checkReview, destroy ],
};
