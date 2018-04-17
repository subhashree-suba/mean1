var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use('/app', express.static(__dirname + "/app"));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.listen('3000', function () {
    console.log("Listening to localhost 3000");
})
