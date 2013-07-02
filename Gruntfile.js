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
      xml: {
        src: ['test/fixtures/sublime.xml'],
        dest: 'tmp/result/sublime.json'
      }
    },
    clean: {
      tmp: ['<%= convert.xml.dest %>']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('test', ['jshint']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'test', 'convert']);


};