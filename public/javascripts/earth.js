var app = {
	init: function(instance) {
		this.ge = instance;
		ge.getWindow().setVisibility(true);
		app.iframeShim();
	},

	failure: function(err) {
		console.log('gah, error code ' + err);
	}
};

var google = window.google;

google.load('earth', '1', {'other_params':'sensor=false'});
google.setOnLoadCallback(function() {
	google.earth.createInstance('map-canvas', app.init, app.failure);
});
