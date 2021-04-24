// import express
const express = require("express");
// setting express
const app = express();
// port
const port = 3000;
// router
const admin = require("./routes/admin");
const contacts = require("./routes/contacts");

// GET / generat the url
app.get("/", (req, res) => {
  res.send("This is DevFrog by Express");
});
// GET /test
app.get("/test", (req, res) => {
  res.send("This is test page");
});

// middleware
app.use("/admin", admin);
app.use("/contacts", contacts);

// open server
app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
