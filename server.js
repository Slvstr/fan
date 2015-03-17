var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

console.log('server listening on port 5000');
app.listen(process.env.port || 5000);