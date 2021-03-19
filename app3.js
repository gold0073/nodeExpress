var express = require('express');
var http = require('http');

var app = express();
app.set('port',process.env.Port||3020);

app.use((req,res,next) => {
    res.writeHead(200,{"content-Type":"text/html;charset=utf8"});

    console.log('첫번째 미들웨어 호출됨');

    req.user = "mike";

    next();
});

app.use((req,res,next) => {
    console.log('두번째 미들웨어 호출됨');

    res.end('<h1>서버에서 응답한 결과 : ' + req.user + '</h1>');
});

var server = http.createServer(app).listen(app.get('port'), ()=>{
    console.log('익스페레스로 웹서버 실행--:' + app.get('port'));
});
