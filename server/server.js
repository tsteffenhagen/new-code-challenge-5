var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
var db = require('./modules/db.js');
var messageRouter = require('./routers/messages.router.js');

app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/messages', messageRouter);

app.listen(port, function () {
    console.log('everything is working!', port);
});