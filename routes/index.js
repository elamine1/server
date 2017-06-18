var express = require('express');
var router = express.Router();

/* Hiermee wordt de hoofdpagina weergeven */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
