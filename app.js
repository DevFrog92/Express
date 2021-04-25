// import express
const express = require("express");
// express view engine
const nunjuck = require("nunjucks");
//
const logger = require("morgan");
//
const bodyParser = require("body-parser");

// setting express
const app = express();
// port
const port = 3000;

nunjuck.configure("template", {
  autoescape: true, // cross site 공격을 무효화 시키기 위해서 사용한다.
  express: app,
});

// Middleware settings -> router 설정 전에 정의
app.use(logger("dev"));
// bodyParser setting -> middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/*
request에 body 변수를 추가했다.
app.use((req,res,next) => {
  req.body = {

  }
})
*/
function vipMiddleware(req, res, next) {
  console.log("최우선 미들웨어");
  next();
}

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
app.use("/admin", vipMiddleware, admin);
app.use("/contacts", contacts);

// open server
app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
