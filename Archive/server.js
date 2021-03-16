const express = require('express'), path = require('path'), app = express();

app.use(express.static(path.join(__dirname, 'Public')));
app.get('/', function(req, res) {
    res.redirect('index.html');
});
app.listen(process.env.PORT);