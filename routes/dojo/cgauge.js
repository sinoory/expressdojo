var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //file demo.ejs must exist,and must be .ejs file
  res.render('cmpdojoprj/mobileGauges/cgauge.ejs', { title: 'Express' });
});

module.exports = router;
