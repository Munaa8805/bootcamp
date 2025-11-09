const express = require('express');
const dotenv = require('dotenv');



//// Load env vars
// dotenv.config({ path: './config/config.env' });

const app = express();

const PORT =  4000;

app.get('/', (req, res) => {
  res.send('Bootcamper API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running in mode on port ${PORT}`);
});

