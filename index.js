// Modules
var express = require('express');
var app = express();

var port =  process.env.PORT || 443;

// ////////////
// Environments
// ////////////

// ///////////////////
// Serve Request Files
// ///////////////////
app.use(express.static('src'));
app.use(express.static('public'));


app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.sendFile(__dirname + '/index.html')
});
app.get('/dev', function (req, res) {
  //res.send('Hello World!');
  res.sendFile(__dirname + '/dev.html')
});

app.post('/', function (req, res) {
  //res.send('Hello World!');
  res.sendFile(__dirname + '/index.html')
});


// routes ==================================================

var server = app.listen(port, function(){
    console.log('listening on *:' + port);
})

// start app
exports = module.exports = app;
