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
      json: {
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'test/fixtures/',      // Src matches are relative to this path.
            src: ['**/*.xml'], // Actual pattern(s) to match.
            dest: 'tmp/result/',   // Destination path prefix.
            ext: '.json',
          },
        ],
      },
      yml: {
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'test/fixtures/',      // Src matches are relative to this path.
            src: ['**/*.xml'], // Actual pattern(s) to match.
            dest: 'tmp/result/',   // Destination path prefix.
            ext: '.yml',
          },
        ],
      },
    },
    clean: {
      tmp: ['tmp/result/*.{json,yml}']
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