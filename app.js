var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// // set up routes
// app.get('*', function (req, res) {
// 	res.sendFile(path.join(__dirname + './public/partials/index.html'));
// });

var port = process.env.PORT || 3000;
console.log("Express server running on " + port);
app.listen(process.env.PORT || port);