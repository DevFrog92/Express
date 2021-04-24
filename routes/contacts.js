const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is constacts url");
});

router.get("/list", (req, res) => {
  res.send("This is constacts list url");
});

module.exports = router;
