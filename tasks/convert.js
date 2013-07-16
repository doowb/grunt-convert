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
      mergeAttrs: true,
      inline: 8,
      indent: 2
    });

    grunt.verbose.writeln(util.inspect(options, 10, null).cyan);

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

      var srcType = f.src[0].split('.').pop(),
          destType = f.dest.split('.').pop(),
          data = srcFiles;

      // source/destination same, goto next target.
      if (srcType === destType) {
        return;
      }

      // Convert to json type
      if (srcType === 'xml') {
        parse(srcFiles, options, function(err, result) {
          data = JSON.stringify(result, null, options.indent);
        });
      } else if (srcType === 'yml') {
        data = JSON.stringify(YAML.load(f.src[0]), null, options.indent);
      }

      if (destType === 'xml') {
        grunt.log.warn('Converting to XML is not implemented.');
        return;
      } else if (destType === 'yml') {
        data = YAML.stringify(JSON.parse(data), options.inline, options.indent);
      }

      //grunt.verbose.writeln(util.inspect(data, 10, null).cyan);

      // Write the destination file.
      grunt.file.write(f.dest, data);

      // Print a success message.
      grunt.log.ok('File "' + f.dest + '" converted.' + ' OK'.green);
    });
  });
};