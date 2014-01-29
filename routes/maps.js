exports.index = function(req, res){
	res.render('maps', { title: 'Map Tests' });
};

exports.earth = function(req, res){
	res.render('earth', { title: 'Map Tests', env: req.app.get('env')});
};