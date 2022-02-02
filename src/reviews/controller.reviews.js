const service = require("./service.reviews");
const checkReview = require("./validation/checkReview");

async function list(req, res) {
  const data = await service.listReviewsForMovie(req.params.movieId);
  res.json({ data });
}

async function destroy(req, res) {
  await service.destroy(req.params.reviewId);
  res.sendStatus(204);
}

async function update(req, res) {
  const updatedReview = {
    ...res.locals.review,
    ...req.body.data,
  };
  const data = await service.update(updatedReview);
  res.json({ data });
}

module.exports = {
  list,
  update: [checkReview, update],
  delete: [checkReview, destroy],
};
