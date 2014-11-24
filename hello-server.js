/*
    hello-server.js

    The most basic web server you can write using Node.js
*/

'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
   res.send('heuy wurld');
});

app.listen(8080, function() {
    console.log('listening at http://localhost:8080');
});

app.get('/foo', function(req, res) {
    res.send('u called foo?');
});

app.post('/foo', function(req, res) {

})
/*
var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(300, {'Content-Type': 'text/plain'});
    res.end('HelloWorld!\n');

});

server.listen(8080, function() {
    console.log('Server is luvin this at http://localhost:8080');
});
    */