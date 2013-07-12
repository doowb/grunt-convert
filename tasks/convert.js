/*
 * grunt-convert-xml
 * https://github.com/jonschlinkert/grunt-convert-xml
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var util = require('util');
  var parse = require('xml2js').parseString;
  var YAML = require('yamljs');
 
  grunt.registerMultiTask('convert', 'Convert XML to JSON.', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      pretty: 0,
      yml: {
        inline: 2,
        space: 2
      }
    });

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

      if (f.src.length < 1) {
        // No src files, issued warn and goto next target.
        grunt.log.warn('Destination not written because no source files were found.');
        return;
      }

      var srcType = f.src[0].split('.').pop();

      console.log(util.inspect(srcType, 10, null).cyan);
      convert(srcFiles, f, options);
      
    });
  });

  var convert = function(source, file, options) {
    return parse(source, function (err, result) {
      if (err) {
        grunt.log.writeln("error:"+err);
        grunt.log.warn('Destination not written because file was empty.');
      } else {
        grunt.verbose.writeln(util.inspect(result, 10, null).cyan);

        // Stringify to JSON
        var data = JSON.stringify(result, null, options.pretty);

        // Check destination format and write to destination file.
        var type = file.dest.split('.').pop();

        if (type === 'yml') {
          var yaml = YAML.stringify(JSON.parse(data), options.yml.inline, options.yml.spaces);
          grunt.file.write(file.dest, yaml);
        } else {
          grunt.file.write(file.dest, data);
        }

        // Print a success message.
        grunt.log.ok('File "' + file.dest + '" converted.');
      }
    });
  };

};