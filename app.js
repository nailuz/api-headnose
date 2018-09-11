const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(router.post('/login', (req, res, next) => {
    res.status(200).json({ message: 'it works'})
    console.log(req.body)
}));

module.exports = app;