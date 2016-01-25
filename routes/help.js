var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var hp=
'valid cmd:<br> \
    /dj/gauge <br> \
    /dj/slide <br> \
    /dj/crop <br> \
    /dn : dynamicChart.js <br> \
    /fisheye <br> \
    /gfxs : gfx drag <br> \
    /mbGallery : all widgets <br> \
    /todoApp <br> \
    cmd';
    res.send(hp);
});

module.exports = router;
