var express = require('express');
var http = require('http');

var app = express();
app.set('port',process.env.Port||3020);

var server = http.createServer(app).listen(app.get('port'), ()=>{
    console.log('익스페레스로 웹서버 실행:' + app.get('port'));
});
