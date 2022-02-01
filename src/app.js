if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();

/**
 * Error Handling Imports
 */
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

/**
 * Router Imports
 */
const moviesRouter = require("./movies/router.movies");
const reviewsRouter = require("./reviews/router.reviews")

/**
 * Pipeline
 */
app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
