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
      
      parse(srcFiles, function (err, result) {
        if (err) {
          grunt.log.writeln("error:"+err);
          grunt.log.warn('Destination not written because file was empty.');
        } else {
          grunt.verbose.writeln(util.inspect(result, 10, null).cyan);

          // Stringify to JSON
          var data = JSON.stringify(result, null, options.pretty);

          // Check format and write the destination file.
          var type = f.dest.split('.').pop();

          if (type === 'yml') {
            var yaml = YAML.stringify(JSON.parse(data), options.yml.inline, options.yml.spaces);
            grunt.file.write(f.dest, yaml);
          } else {
            grunt.file.write(f.dest, data);
          }

          // Print a success message.
          grunt.log.ok('File "' + f.dest + '" converted.');
        }
      });
      
    });
  });
};