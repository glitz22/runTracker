require("dotenv");
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var uglifyJs = require("uglify-js");
var fs = require("fs");
var passport = require('passport');

require('./api/models/db');
require('./api/config/passport');

var routes = require('./server/routes/index');
var routesApi = require('./api/routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'jade');

var appClientFiles = [
  "client/app.js",
  "client/home/home.controller.js",
  "client/runList/runList.controller.js",
  "client/runs/run.controller.js",
  "client/common/services/runTrackerData.service.js",
  "client/common/directives/pageHeader/pageHeader.directive.js",
  "client/common/directives/pageFooter/pageFooter.directive.js",
  "client/common/directives/navigation/navigation.directive.js",
  "client/common/directives/insertRun/insertRun.directive.js"
];

var uglified = uglifyJs.minify(appClientFiles, {compress : false});

fs.writeFile("public/angular/runTracker.min.js", uglified.code, function(err) {
  if (err) {
    console.log(err);
  }else{
    console.log("Script generated and saved: runTracker.min.js");
  }
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client')));

app.use(passport.initialize());
//app.use('/', routes);
app.use('/api', routesApi);

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

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


module.exports = app;
