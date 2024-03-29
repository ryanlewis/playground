
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var maps = require('./routes/maps');
var http = require('http');
var path = require('path');
var snap = require('./lib/snap');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
app.configure('development', function() {
	app.use(express.errorHandler());
	app.locals.pretty = true;
	app.locals.env = 'development';
});

app.get('/', routes.index);
app.get('/maps', maps.index);
app.get('/earth', maps.earth);

var server = http.createServer(app);
snap.installHandlers(server, {prefix:'/ws/snap'});

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  if (app.get('env') == 'development') console.log('* DEV MODE *');
});
