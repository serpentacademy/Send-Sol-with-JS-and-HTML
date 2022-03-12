const http = require('http');
const express = require('express');
const app = new express();


var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('index2.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8000);

