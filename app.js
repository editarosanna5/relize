var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
const WebSocket = require('ws');
var authenticate = require('./authenticate');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/homeRouter');
var aboutRouter = require('./routes/aboutRouter');
var howtouseRouter = require('./routes/howtouseRouter');
var commentRouter = require('./routes/commentRouter');
var promoRouter = require('./routes/promoRouter');
var config = require('./config');

const mongoose = require('mongoose');

const Locations = require('./models/locations');

const wss = new WebSocket.Server({ port: 8080 }, () => console.log(`WS Server is listening at 8080`));

const url = config.mongoUrl;
const connect = mongoose.connect(url, {
  useMongoClient: true
});

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

var app = express();

// seolah-olah database jumlah orang di masing-masing mall
var counter = {
  'Mall 1':0,
  'Mall 2':0,
  'Mall N':0
};

wss.on('connection', function connection(ws) {
  // tutup connection, harusnya waktu hardware mati doang
   ws.on('close',()=>{
     console.log('disconnected')
   })
  
   // waktu hardware kirim message, di proses di variabel message
   ws.on('message', function incoming(message) {
     console.log('client: %s', message);
     // Process Data
     // Terserah mau di export atau oper ke variabel apapun wkwk 
     const obj = JSON.parse(message);
     counter[`Mall ${obj.id}`] -= obj.remove_count ? obj.remove_count : 0
     counter[`Mall ${obj.id}`] += obj.add_count ? obj.add_count : 0
     console.log(counter)
     // Send back message, if necessary
   });
 });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/home', homeRouter);
app.use('/how-to-use', howtouseRouter);
app.use('/about', aboutRouter);
app.use('/comments', commentRouter);
app.use('/promos', promoRouter);

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