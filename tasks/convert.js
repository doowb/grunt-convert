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
      pretty: true,
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
      if (srcType === 'csv') {
        var csv = require('csv');

        csv().from(data)
        .to.array( function(data){
          console.log(data);
        } );

      } else if (srcType === 'xml') {
        parse(srcFiles, options, function(err, result) {
          data = JSON.stringify(result, null, options.indent);
        });
      } else if (srcType === 'yml') {
        data = JSON.stringify(YAML.load(f.src[0]), null, options.indent);
      }

      // Check destination type
      if (destType === 'xml') {
        // Parse to object and convert to destination
        data = toXML(JSON.parse(data), options.header);
        data = (options.pretty) ? require('pretty-data').pd.xml(data) : data; 

      } else if (destType === 'yml') {
        data = YAML.stringify(JSON.parse(data), options.inline, options.indent);
      }

      grunt.verbose.writeln(util.inspect(options, 10, null).cyan);

      // Write the destination file.
      grunt.file.write(f.dest, data);

      // Print a success message.
      grunt.log.ok('File "' + f.dest + '" converted.' + ' OK'.green);
    });
  });

  var toXML = function xml(json, options) {

    var XML_CHARACTER_MAP = {
          '&': '&amp;',
          '"': '&quot;',
           "'": '&apos;',
          '<': '&lt;',
          '>': '&gt;'
        },
        result = options.header ? '<?xml version="1.0" encoding="UTF-8"?>' : '',
        type = json.constructor.name;
    
    options.header = false;

    if(type==='Array'){
      json.forEach(function(node){
        result += xml(node, options);
      });

    } else if(type ==='Object' && typeof json === "object") {

      Object.keys(json).forEach(function(key){
        if(key!==options.attrkey){
          var node = json[key],
          attributes = '';

          if(options.attrkey && json[options.attrkey]){
            Object.keys(json[options.attrkey]).forEach(function(k){
              attributes += util.format(' %s="%s"', k, json[options.attrkey][k]);
            });
          }
          var inner = xml(node,options);

          if(inner){
            result += util.format("<%s%s>%s</%s>", key, attributes, xml(node,options), key);
          } else {
            result += util.format("<%s%s/>", key, attributes);
          }
        }
      });
    } else {
      return json.toString()
      .replace(/([&"<>''])/g, function(str, item) {
        return XML_CHARACTER_MAP[item];
      });  
    }

    return result;
  };
};