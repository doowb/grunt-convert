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
      notfound: {
        src: ['test/fixtures/notfound.xml'],
        dest: 'tmp/result/notfound.json'
      },
      simple: {
        options: {
          indent: 8
        },
        src: ['test/fixtures/simple.xml'],
        dest: 'tmp/result/simple.json'
      },
      json2xml:{
        options: {
          header: true
        },
        src: ['test/fixtures/sublime.json'],
        dest: 'tmp/result/sublime.xml'
      },
      yml2json: {
        files: [
          {
            expand: true,           // Enable dynamic expansion.
            cwd: 'test/fixtures/',  // Src matches are relative to this path.
            src: ['**/*.yml'],      // Actual pattern(s) to match.
            dest: 'tmp/result/',    // Destination path prefix.
            ext: '.json'
          }
        ]
      },
      json2yml: {
        files: [
          {
            expand: true,
            cwd: 'test/fixtures/',
            src: ['**/*.json'],
            dest: 'tmp/result/',
            ext: '.yml'
          }
        ]
      },
      xml2json: {
        files: [
          {
            expand: true,
            cwd: 'test/fixtures/',
            src: ['**/*.xml'],
            dest: 'tmp/result/',
            ext: '.json'
          }
        ]
      },
      xml2yml: {
        files: [
          {
            expand: true,
            cwd: 'test/fixtures/',
            src: ['**/*.xml'],
            dest: 'tmp/result/',
            ext: '.yml'
          }
        ]
      }
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