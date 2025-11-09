const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      name: "Munaa Tsetsegmaa",
      age: 26,
      status: "Learning Node.js",
    },
  });
});

module.exports = router;