var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/')); //set views dir to root dir
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/pub/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));

app.use('/', require('./routes/index.js'));
app.use('/dj/gauge', require('./routes/dojo/gauge.js'));
app.use('/dj/slide', require('./routes/dojo/slide'));
app.use('/dj/crop', require('./routes/dojo/crop.js'));

app.use(express.static(path.join(__dirname, 'dojoprj/dynamicChart/')));
app.use('/dn', require('./routes/dojo/dynamicChart.js'));

app.use(express.static(path.join(__dirname, 'dojoprj/fisheye/')));
app.use('/fisheye', require('./routes/dojo/fisheye.js'));

app.use(express.static(path.join(__dirname, 'dojoprj/gfxserialization/')));
app.use('/gfxs', require('./routes/dojo/gfxs.js'));

app.use(express.static(path.join(__dirname, 'dojoprj/mobileGallery/')));
app.use('/mbGallery', require('./routes/dojo/mbGallery.js'));

app.use(express.static(path.join(__dirname, 'dojoprj/todoApp/')));
app.use('/todoApp', require('./routes/dojo/todoAppR.js'));

app.use(express.static(path.join(__dirname, 'dojoprj/bezier/')));
app.use('/bezier', require('./routes/dojo/bezierR.js'));

app.use(express.static(path.join(__dirname, 'cmpdojoprj/mobileGauges/')));
app.use('/gauge', require('./routes/dojo/cgauge.js'));

app.use(express.static(path.join(__dirname, 'sencha/')));
app.use('/sclist', require('./routes/sencha/sclist.js'));
app.use('/scnestlist', require('./routes/sencha/scnestlist.js'));
app.use('/scrunbus', require('./routes/sencha/scrunbus.js'));

app.use('/help', require('./routes/help.js'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(3005);

module.exports = app;
