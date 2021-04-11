//Require module
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

// Express Initialize
const app = express();
app.server = http.createServer(app);
const router = express.Router();

const port = 8000;
app.listen(port, () => {
    console.log('listen port 8000');
})

// Router will all be prefixed with /api/v1
app.use('/api/v1', router);

// parse application/x - www - form - urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/hello', (req, res) => {
    res.send(`hello ${req.query.username}`);
})

app.post('/hello', (req, res) => {
    res.send(`hello ${req.body.username}`);
})