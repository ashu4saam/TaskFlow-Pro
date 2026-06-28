const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "TaskFlow Backend Running Successfully 🚀",
  });
});

// Routes
app.use("/api/tasks", taskRoutes);

module.exports = app;