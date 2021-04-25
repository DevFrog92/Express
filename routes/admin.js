const express = require("express");
const router = express.Router();

//
function testMiddleware(req, res, next) {
  console.log("First middleware");
  next();
}

function testMiddleware2(req, res, next) {
  console.log("Second middleware");
  next();
}

// ex )
// function loginRequired(req,res,next) {
//   if(로그인이 되어있지 않으면){
//     res.redirect('로그인 창으로')
//   }else {
//     next();
//   }
// }

// moddleware를 한번 거치고 제어권을 next로 다음으로 넘긴다
router.get("/", testMiddleware, testMiddleware2, (req, res) => {
  res.send("admin 이후의 url");
});

router.get("/products", (req, res) => {
  // res.send("admin products 이후의 url"); // text
  // tempalte 이후의 경로
  res.render("admin/products.html", {
    message: "<h1>This is DevFrog</h1>",
    online: "express online",
  });
});

router.get("/products/write", (req, res) => {
  res.render("admin/write.html");
});

router.post("/products/write", (req, res) => {
  res.send(req.body);
});

module.exports = router;
