'use strict';

const express = require('express');
var path = require('path');

// Constants
const PORT = 4567;
const HOST = '0.0.0.0';

// App
const app = express();
app.use('/dist', express.static(path.join(__dirname + '/dist')));
app.use('/build', express.static(path.join(__dirname + '/build')));
app.use('/client', express.static(path.join(__dirname + '/client')));
app.get('/app', (req, res) => {
    res.sendFile(path.join(__dirname + '/echotest.html'));
});

app.listen(PORT, HOST);