module.exports = (grunt) => {
    'use strict';
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                'src/*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
            }
        },
        clean: {
            build: ['.cache']
        },

        lasso: {

        }

    });
    //console.log(grunt);
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // loading default task
    grunt.registerTask('default', ['jshint']);
};