/*
 * grunt-convert-xml
 * https://github.com/jonschlinkert/grunt-convert-xml
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var util     = require('util');
  var xml2json = require('node-xml2json');

 
  grunt.registerMultiTask('convert', 'Convert XML to JSON.', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      var srcFiles = f.src.filter(function(filepath) {
        // Verify that files exist. Warn if a source file/pattern was invalid.
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(grunt.file.read).join(grunt.util.normalizelf(grunt.util.linefeed)); // Read source files.

      var convertFormat = toJSON(srcFiles);
      if (convertFormat.length < 1) {
        grunt.log.warn('Destination not written because file was empty.');
      } else {
        
        grunt.verbose.writeln(util.inspect(srcFiles, 10, null).cyan);
        
        // Stringify to JSON and write the destination file.
        grunt.file.write(f.dest, JSON.stringify(convertFormat));

        // Print a success message.
        grunt.log.ok('File "' + f.dest + '" converted.');
      }
    });
  });  

  var toJSON = function(source) {
    try {
      // Parse given XML files
      return xml2json.parser(source);
    } catch (e) {
      grunt.log.error(e);
      grunt.fail.warn('Conversion failed.');
    }
  };
};