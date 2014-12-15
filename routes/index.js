var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome, pip' });
});

// About
router.get('/about', function(req, res) {
  res.render('about', { title: 'About Nodle'})
});

module.exports = router;
