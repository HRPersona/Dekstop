// grab the packages we need
var request    = require('request');
var express    = require('express');
var app        = express();
var port       = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var cofig      = require('../src/config/parameters.json');
var cors       = require('cors');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

app.post('/login',function(req,res){
    request.post({
        url : cofig.API_ENDPOINT + '/login.json',
        form : {
            username: req.body.username,
            password: req.body.password
        }
    }, function optionalCallback(err, httpResponse, body) {
        if (!err) {
        	res.send(body)
        }
    })
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);