const service = require("../service.reviews");

async function checkReview(req, res, next) {
  const { reviewId } = req.params;
  const review = await service.readReview(reviewId);

  if (review && review.length !== 0) {
    res.locals.review = review;
    return next();
  }
  next({ status: 404, message: "Review cannot be found." });
}

module.exports = checkReview;
