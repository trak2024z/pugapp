var express = require('express');

const path = require('path');
const app = express();

const router = require('./pugtest');

// Ustawienie silnika szablonów Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use('/', router);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
