const express = require("express");
const dotenv = require("dotenv");


const bootcamps = require("./routes/bootcamps");

//// Load env vars
dotenv.config({
  path: "./config/config.env",
  //   override: true,
  //   debug: true,
  //   processEnv: true,
});

const app = express();
app.use("/api/v1/bootcamps", bootcamps);



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
