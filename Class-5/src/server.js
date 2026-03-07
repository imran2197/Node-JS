const express = require("express");
const { movieRoutes } = require("./routes/movieRoutes");
const { ApiError } = require("./core/ApiError");
const app = express();
app.use(express.json());

app.use("/api/movies", movieRoutes);

app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    const { status = 500, message = "Something went wrong" } = err;
    return res.status(status).json({
      success: false,
      message,
    });
  }
});

app.listen(8080, () => {
  console.log("Server listening at port 8080");
});
