const http = require("http");

function handleRequest(request, response) {
  if (request.url === "/currenttime") {
    response.statusCode = 200; // 요청을 성공했는지 알림
    response.end("<h1>" + new Date().toISOString() + "</h1>"); // 보내야하는 내용
  } else if (request.url === "/") {
    response.statusCode = 200; // 요청을 성공했는지 알림
    response.end("<h1>Hello World!</h1>"); // 보내야하는 내용
  }
}

const server = http.createServer(handleRequest);

server.listen(3000);

// amazon.com => Send a request to Amazon's server
// amazon.com:80 암호화 되지 않은 일반적인 포트
// 443: 암호화 된 방식으로 요청을 보내는 SSL
