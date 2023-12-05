var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var wyjRouter=require('./routes/wyj')
var lylRouter=require('./routes/lyl')
var hyRouter=require('./routes/hy')
var linRouter=require('./routes/lin')
var shrRouter=require('./routes/shr')
var jfqRouter=require('./routes/jfq')


var app = express();
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('/upload',express.static(__dirname + '/upload'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/wyj',wyjRouter)
app.use('/lyl',lylRouter)
app.use('/hy',hyRouter)
app.use('/lin',linRouter)
app.use('/shr',shrRouter)
app.use('/jfq',jfqRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;