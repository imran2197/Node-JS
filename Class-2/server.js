const express = require("express");
const app = express();
app.use(express.json());

const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method}
${req.url}`);
  next();
};

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/data", (req, res) => {
  console.log(req.body);
  res.send("Received a POST request.");
});

const users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
];

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;

  users.push(newUser);
  res.status(201).json({
    message: "User Created",
    user: newUser,
  });
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const found = users.find((user) => user.id === userId);
  if (found) {
    return res.status(200).json({
      message: "User found",
      data: found,
    });
  }
  return res.status(404).json({
    message: "User not found",
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }

  users.splice(userId - 1, 1);
  return res.status(200).json({
    message: "User deleted",
  });
});

app.get("/users", (req, res) => {
  return res.status(200).json({
    message: "Users Data",
    data: users,
  });
});

const port = 8888;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
