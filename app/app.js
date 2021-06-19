const express = require("express")
const app = express();
//const PORT = 3001;// app.listen 모듈로 이동

//앱 세팅
app.set("views", "./src/views")
app.set("view engine", "ejs")
app.use(express.static(`${__dirname}/src/public`))

// 라우팅
const home = require("./src/routes/home")   
app.use("/", home);                     // use는 미들웨어를 등록해주는 메소드

/* app.listen(PORT, () => {
    console.log('서버가동');  //$ node app.js
}); */                                  // 실행소스 app.listen 모듈화

module.exports = app            // 실행소스 app.listen 모듈화를 위해 내보내기

// 라우팅 소스 route 폴더로 이동 
// app.get("/", (req, res) => {
//     res.render("home")
// });
// app.get("/login", (req, res) => {
//     res.render("home/login")
// });
// app.listen(PORT, () => {
//     console.log('서버가동');  //$ node app.js
// });

// ejs 사용 전
/* app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        여기는 루트
    </body>
    </html>
    `)
});
app.get("/login", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <input type="text">
        <input type="text">
    </body>
    </html>
    `)
});
app.listen(3001, () => {
    console.log('서버가동');  //$ node app.js
}); */


// express 사용
//import express from "express"  //set "type": "module" in the package.json
/* const express = require("express")
const app = express();
app.get("/", (req, res) => {
    res.send('여기는 루트')
});
app.get("/login", (req, res) => {
    res.send('여기는 로그인')
});
app.listen(3001, () => {
    console.log('서버가동');  //$ node app.js
}); */

// http 사용
/* const http = require("http")
const app = http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    if (req.url === "/") {
        res.end("여기는 루트")
    } else if (req.url === "/login"){
        res.end('여기는 로그인')
    }
});
app.listen(3002, () => {
    console.log('여기는 http로 가동된 서브')
})
 */

