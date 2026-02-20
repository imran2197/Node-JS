const express = require("express");
const app = express();

app.use(express.json());

let notes = [
  { id: 1, title: "First note" },
  { id: 2, title: "Second note" },
];

// Already implemented - DO NOT CHANGE
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});

// Already implemented - DO NOT CHANGE
app.get("/notes", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Notes fetched successfully",
    data: notes,
  });
});

// TODO: Strengthen this POST endpoint with enhanced validation
app.post("/notes", (req, res) => {
  const { title } = req.body;

  // Basic check - already provided
  if (!title) {
    res.status(400).json({
      success: false,
      message: "Note title is required",
    });
  }

  // TODO: Add validation to check if title is a string
  // If not, return: { success: false, message: "Note title must be a string" }
  if (typeof title !== "string") {
    res.status(400).json({
      success: false,
      message: "Note title must be a string",
    });
  }

  // TODO: Trim the title and store in a variable called trimmedTitle
  const trimmedTitle = title.trim();
  // TODO: Add validation to check if trimmedTitle is empty (length === 0)
  // If empty, return: { success: false, message: "Note title cannot be empty" }
  if (trimmedTitle.length == 0) {
    res.status(400).json({
      success: false,
      message: "Note title cannot be empty",
    });
  }

  // TODO: Add validation to check if trimmedTitle length exceeds 100 characters
  // If too long, return: { success: false, message: "Note title cannot exceed 100 characters" }
  if (trimmedTitle.length > 100) {
    res.status(400).json({
      success: false,
      message: "Note title cannot exceed 100 characters",
    });
  }

  // TODO: Use trimmedTitle instead of title when creating the note
  const newNote = {
    id: notes.length + 1,
    title: trimmedTitle, // Change this to use trimmedTitle after implementing trimming
  };

  notes.push(newNote);

  res.status(201).json({
    success: true,
    message: "Note created successfully",
    data: newNote,
  });
});

// 404 handler - DO NOT CHANGE
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.listen(8888, (req, res) => {
  console.log("App Running");
});
