var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/pages/index.html'));
});

app.get('/about', function(request, response) {
    response.sendFile(path.join(__dirname + '/pages/about-me.html'))
});

app.get('/project', function(request, response) {
    response.sendFile(path.join(__dirname + '/pages/project.html'))
});

app.get('/resume', function(request, response) {
    response.sendFile(path.join(__dirname + '/resume.pdf'))
});

// app.get('/resume', function(request, response) {
//     response.sendFile(path.join(__dirname + '/pages/resume.html'))
// });

app.get('/contact', function(request, response) {
    response.sendFile(path.join(__dirname + '/pages/contact.html'))
});

app.use(express.static(__dirname));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


