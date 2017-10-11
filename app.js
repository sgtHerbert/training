var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

//routes
var index     = require('./routes/index');
var users     = require('./routes/users');
var messaging = require('./routes/messaging');

var app = express();

//socket.io messaging
var socketListener = require('http').createServer(app);
var io = require('socket.io')(socketListener);
socketListener.listen(8080);

var dialogues = ["c'est quoi ton nom ? ", 'chui pas rassuré', 'regarde à gauche ya des dauphins', "moi c'est zambla", "oua t'es balaise"]

io.on('connection', function(client) {  
	console.log('Client connected...');

	client.on('message', function(){
		io.emit('message', dialogues[Math.floor(Math.random() * dialogues.length)]);
	})
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/messaging', messaging);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
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
