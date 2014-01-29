function App() {
	this.init = function() {
		var options = {
			center: new google.maps.LatLng(51.506886, -0.07449),
			zoom: 18,
			mapTypeId: google.maps.MapTypeId.SATELLITE
		};

		var map = new google.maps.Map(window.document.getElementById("map-canvas"), options);
		map.setTilt(45);
	}
};

var app = new App();
google.maps.event.addDomListener(window, 'load', app.init);