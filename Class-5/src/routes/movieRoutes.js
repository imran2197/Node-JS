const express = require("express");
const {
  getAllMovies,
  createAMovie,
  getAMovie,
  updateAMovie,
  deleteAMovie,
} = require("../controllers/movieController");
const movieRoutes = express.Router();

movieRoutes.get("/", getAllMovies);
movieRoutes.post("/", createAMovie);
movieRoutes.get("/:id", getAMovie);
movieRoutes.patch("/:id", updateAMovie);
movieRoutes.delete("/:id", deleteAMovie);

module.exports = {
  movieRoutes,
};
