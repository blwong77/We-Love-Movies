const router = require("express").Router();
const controller = require("./controller.movies");
const theaterRouter = require("../theaters/router.theaters");
const reviewRouter = require("../reviews/router.reviews");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);

router.route("/:movieId").get(controller.read).all(methodNotAllowed);

router.use("/:movieId/theaters", theaterRouter);

router.use("/:movieId/reviews", reviewRouter);

module.exports = router;
