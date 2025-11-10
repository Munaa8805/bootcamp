const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");

const logger = require("./middlewares/logger");
const connectDB = require("./config/db");

const bootcamps = require("./routes/bootcamps");

//// Load env vars
dotenv.config({
  path: "./config/config.env",
  //   override: true,
  //   debug: true,
  //   processEnv: true,
});

//// Connect to database
connectDB();

const app = express();

//// Dev logging middleware
app.use(logger);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

// // Rate limiting
// const limiter = rateLimit({
//   windowMs: 10 * 60 * 1000, // 10 mins
//   max: 100,
// });
// app.use(limiter);

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
