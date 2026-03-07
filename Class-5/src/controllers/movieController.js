const { InternalServerError, NotFoundError } = require("../core/ApiError");
const { ApiResponse } = require("../core/ApiResponse");

const movies = [
  {
    id: 1,
    title: "Ironman",
    year: 2010,
    isWatched: true,
  },
  {
    id: 2,
    title: "Spiderman",
    year: 2013,
    isWatched: true,
  },
  {
    id: 3,
    title: "Batman",
    year: 2015,
    isWatched: false,
  },
];
const getAllMovies = (req, res) => {
  res.status(200).json(ApiResponse.build(true, movies, "All Movies"));
};

const createAMovie = (req, res) => {
  try {
    const { title, year } = req.body;
    const newMovie = {
      id: movies.length + 1,
      title,
      year,
      isWatched: false,
    };
    movies.push(newMovie);
    res
      .status(201)
      .json(
        ApiResponse.build(
          true,
          newMovie,
          `movie with id ${newMovie.id} created`,
        ),
      );
  } catch (err) {
    throw new InternalServerError("Internal Server Error");
  }
};

const getAMovie = (req, res) => {
  const { id } = req.params;
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    throw new NotFoundError("Movie Not Found");
  }

  res.status(200).json(ApiResponse.build(true, movie, `Movie with id ${id}`));
};

const updateAMovie = (req, res) => {
  const { id } = req.params;
  const { title, year } = req.body;

  const movie = movies.find((m) => m.id === parseInt(id));
  movie.title = title;
  movie.year = year;

  res
    .status(200)
    .json(ApiResponse.build(true, movie, `updated the movie successfully`));
};

const deleteAMovie = (req, res) => {
  const { id } = req.params;

  const index = movies.findIndex((m) => m.id === parseInt(id));
  movies.splice(index, 1);
  res
    .status(200)
    .json(ApiResponse.build(true, null, `Movie deleted successfully`));
};

module.exports = {
  getAllMovies,
  createAMovie,
  getAMovie,
  updateAMovie,
  deleteAMovie,
};
