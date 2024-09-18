const fs = require("fs");
const path = require("path"); // 운영체제에서 작동하는 경로 쉽게 구성

const express = require("express");
// const http = requrie('http'); // package 불러오기

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:3000/currenttime

app.get("/", function (req, res) {
  res.send(
    "<form action='/store-user' method='POST'><label>Your Name</label><input type='text' name='username'><button>Submit</button></form>"
  );
}); // localhost:3000/

app.post("/store-user", function (req, res) {
  const userName = req.body.username; // 여기서 보내는 내용은 자바스크립트 객체가 아님 그래서 오류남

  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData); // file -> javascript object

  existingUsers.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(existingUsers)); // javascript object -> file

  console.log(userName);
  res.send("<h1>Username stored!</h1>");
});

// function handleRequest(request, response) {
//   if (request.url === "/currenttime") {
//     response.statusCode = 200; // 요청을 성공했는지 알림
//     response.end("<h1>" + new Date().toISOString() + "</h1>"); // 보내야하는 내용
//   } else if (request.url === "/") {
//     response.statusCode = 200; // 요청을 성공했는지 알림
//     response.end("<h1>Hello World!</h1>"); // 보내야하는 내용
//   }
// }

app.listen(3000);
// const server = http.createServer(handleRequest);

// server.listen(3000);

// amazon.com => Send a request to Amazon's server
// amazon.com:80 암호화 되지 않은 일반적인 포트
// 443: 암호화 된 방식으로 요청을 보내는 SSL
