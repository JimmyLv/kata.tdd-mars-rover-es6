 module.exports = function(grunt) {
   // Project configuration.
   grunt.initConfig({
     jasmine: {
       src: 'src/**/*.js',
       options: {
         specs: 'specs/**/*.js'
       }
     },
     jshint: {
       all: ['Gruntfile.js', 'src/**/*.js', 'specs/**/*.js'],
       options: {
         reporter: require('jshint-stylish')
       }
     },
     watch: {
       files: ['Gruntfile.js', 'src/**/*.js', 'specs/**/*.js'],
       tasks: ['jshint', 'jasmine']
     }
   });
   grunt.loadNpmTasks('grunt-contrib-jasmine');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-jshint');
 };