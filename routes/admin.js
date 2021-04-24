const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("admin 이후의 url");
});

router.get("/products", (req, res) => {
  res.send("admin products 이후의 url"); // text
});

module.exports = router;
