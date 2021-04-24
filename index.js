// express 없이 서버를 띄우는 방법

/*
const http = require("http");
http
  .createServer((req, res) => {
    // 문서 타입을 지정한다.
    res.writeHead(200, { "Content-Type": "text/plain" });
    // 실제 화면에 적어줄 내용
    res.write("This is DevFrog");
    res.end();
  })
  .listen(3020);
*/

  // express로 웹 서버를 띄우기

