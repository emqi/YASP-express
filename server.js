process.env.DEBUG = 'express:*';
const https = require('http');
const express = require('express');

const app = express();
app.use('/', express.static(__dirname + '/dist'));

const server = https.createServer(app);

server.listen(8080);