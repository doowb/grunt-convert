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
      simple: {
        options: {
          indent: 8
        },
        src: ['test/fixtures/simple.xml'],
        dest: 'tmp/result/simple.json'
      },
      custom_ext: {
        options: {
          type: 'xml'
        },
        files: [
          {
            expand: true,
            cwd: 'test/fixtures/custom/',
            src: ['*.*'],
            dest: 'tmp/result/custom/',
            ext: '.json'
          }
        ]
      },
      adv: {
        options: {
          mergeAttrs: true,
          explicitArray: false,
          indent: 2,
          inline: 8
        },
        src: ['test/fixtures/theme.xml'],
        dest: 'tmp/result/theme-adv.yml'
      },
      json2xml:{
        options: {
          xml: {
            header: true
          }
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
      yaml2json: {
        files: [
          {
            expand: true,           // Enable dynamic expansion.
            cwd: 'test/fixtures/',  // Src matches are relative to this path.
            src: ['**/*.yaml'],      // Actual pattern(s) to match.
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
      json2yaml: {
        files: [
          {
            expand: true,
            cwd: 'test/fixtures/',
            src: ['**/*.json'],
            dest: 'tmp/result/',
            ext: '.yaml'
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
      },
      csv2json: {
        src: ['test/fixtures/csv2json.csv'],
        dest: 'tmp/result/csv2json.json'
      },
      json2csv: {
        options: {
          csv: {
            header: true,
            columns: ['id','lastname','firstname']
          }
        },
        src: ['test/fixtures/json2csv.json'],
        dest: 'tmp/result/json2csv.csv'
      },
      plist2json: {
        files: [
          {
            expand: true,
            cwd: 'test/fixtures/',
            src: ['**/*.plist'],
            dest: 'tmp/result/',
            ext: '.json'
          }
        ]
      },
      json2plist: {
        files: [
          {
            expand: true,
            cwd: 'test/fixtures/',
            src: ['**/*.json'],
            dest: 'tmp/result/',
            ext: '.plist'
          }
        ]
      }
    },
    clean: {
      tmp: ['tmp/result/*.{json,yml,csv,xml,plist}']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-verb');

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('test', ['jshint', 'convert']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'test', 'verb']);


};
