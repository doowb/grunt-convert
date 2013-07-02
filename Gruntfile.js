/*
 * grunt-convert
 * https://github.com/assemble/grunt-convert
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: ['Gruntfile.js', 'tasks/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    convert: {
      one: {
        src: ['test/one.xml'],
        dest: 'test/one.json'
      },
      two: {
        src: ['test/two.xml'],
        dest: 'test/two.json'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('test', ['jshint']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test', 'convert']);


};