module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			files: ['**/*','!**/node_modules/**'],
			options: {
				livereload: true
			}
		},

		express: {
			dev: {
				options: {
					script: './app.js'
				}
			}
		},

	});

	grunt.registerTask('server', ['express:dev', 'watch']);
};