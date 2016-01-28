var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //file demo.ejs must exist,and must be .ejs file
  res.render('sencha/apps/list/sclist.ejs', { title: 'Express' });
});

module.exports = router;
