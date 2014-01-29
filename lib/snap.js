var sockjs = require('sockjs');

var snap = sockjs.createServer();

var server = {
	echo: function(data) {
		this.send({method: 'consoleLog', msg: 'Received ' + data.msg});
	},

	close: function(data) {
	}
};

snap.on('connection', function(conn) {
	var send = function(data) {
		conn.write(JSON.stringify(data));
	};

	console.log('connection ', conn);

	conn.on('close', function() {
		console.log('close ', conn);
	});

	conn.on('data'), function(data) {
		data = JSON.parse(data);
		server[data.method].call(conn, data);
	};
});

exports.installHandlers = snap.installHandlers;