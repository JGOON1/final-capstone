const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/final-capstone-project'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/final-capstone-project/index.html'));});
app.listen(process.env.PORT || 8080);