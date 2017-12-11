var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    name: String,
    message: String
});

var Messages = mongoose.model('messages', MessageSchema);

router.get('/', function (req, res){
    Messages.find({}, function(err, foundMessages){
        if(err) {
            res.sendStatus(500);
        }else {
            res.send(foundMessages);
        }
    })
})

router.post('/', function(req, res){
    console.log(req.body);
    var messageToSave = req.body;
    var message = new Messages(messageToSave);
    message.save(function(err, savedMessage){
        if(err) {
            res.sendStatus(500);
        } else {
            res.send(savedMessage);
        }
    });
});

module.exports = router;