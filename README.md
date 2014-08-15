# grunt-convert [![NPM version](https://badge.fury.io/js/grunt-convert.png)](http://badge.fury.io/js/grunt-convert)   [![Build Status](https://travis-ci.org/assemble/grunt-convert.png)](https://travis-ci.org/assemble/grunt-convert) 

> Convert between XML, JSON and YAML, from one format to another.

## Getting Started
_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._

From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install grunt-convert --save-dev
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-convert');
```

If the plugin has been installed correctly, running `grunt --help` at the command line should list the newly-installed plugin's task or tasks. In addition, the plugin should be listed in package.json as a `devDependency`, which ensures that it will be installed whenever the `npm install` command is run.

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html

## Options

###### type
Type: `String`  
Default: `undefined`

Define content when using unknown extension.

##### indent
Type: `Int`  
Default: `2`

Force indentation ("pretty printing") for JSON and YAML.

##### inline
Type: `Int`  
Default: `8`

Force indentation ("pretty printing")  for YAML only.

##### header
Type: `boolean`  
Default: false

Use when converting JSON/YAML to XML. Add XML tag header.

See [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js#options) for other available options

##### cvs.delimiter
Type: `string`  
Default: `,`

Set the field delimiter. One character only.

##### cvs.columns
Type: `boolean`  
Default: true

List of fields or true if autodiscovered in the first CSV line.

See [node-csv](https://github.com/wdavidw/node-csv/blob/master/doc/from.md#from.options) for other available options.

## Usage Examples


### Convert CSV to JSON

```js
grunt.initConfig({
  convert: {
    options: {
      explicitArray: false,
    },
    csv2json: {
      src: ['test/fixtures/csv2json.csv'],
      dest: 'tmp/result/csv2json.json'
    }
  }
});
```


### Convert JSON to XML

```js
grunt.initConfig({
  convert: {
    options: {
      explicitArray: false,
    },
    json2xml: {
	    options: {
		    xml: {
		      header: true
		    }
		  },
      src: ['test/fixtures/sublime.json'],
  		dest: 'tmp/result/sublime.xml'
    }
  }
});
```


### Convert JSON to YAML

```js
grunt.initConfig({
  convert: {
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
    }
  }
});
```

### Convert XML to YAML

```js
grunt.initConfig({
  convert: {
    options: {
      explicitArray: false,
    },
    xml2yml: {
      src: ['convert.xml'],
      dest: 'dist/convert.yml'
    }
  }
});
```

### Convert XML to JSON

```js
grunt.initConfig({
  convert: {
    options: {
      explicitArray: false,
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
  }
});
```

### Convert PLIST to JSON

```js
grunt.initConfig({
  convert: {
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
    }
  }
});
```

### Convert JSON to PLIST

```js
grunt.initConfig({
  convert: {
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
  }
});
```


## Contributing

We welcome all kinds of contributions! The most basic way to show your support is to star the project, and if you'd like to get involved please see the [Contributing to grunt-convert](http://assemble.io/contributing/) guide for information on contributing to this project.

## Changes
**DATE**       **VERSION**   **CHANGES**                                                               
* 2014-05-03   v0.1.11       Fix (empty string), xml2js (only invoke parseString callback once),XML    
                             parser error display a warning and abort Grunt immediately                
* 2014-03-11   v0.1.10       Fixing options.type issue and adding more tests around it                 
* 2013-12-14   v0.1.9        Fix json to yml converter,Add `type` option to define content with unknown
                             extension                                                                 
* 2013-12-18   v0.1.8        adding missing write file statement when converting xml to json           
* 2013-12-12   v0.1.7        Fix async issues                                                          
* 2013-12-02   v0.1.6        Add support for Grunt 0.4.2,Use external library,Fix missing "Release     
                             History"                                                                  
* 2013-09-10   v0.1.5        Add support for JSON to CSV.                                              
* 2013-09-10   v0.1.4        Add support for CSV to JSON.                                              
* 2013-07-16   v0.1.3        JSON/YAML to XML.                                                         
* 2013-07-15   v0.1.2        Add support YAML. Added XML to JSON/YAML, JSON to YAML, and YAML to JSON. 
* 2013-07-02   v0.1.1        XML to JSON.                                                              

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Hariadi Hinta**

+ [github.com/assemble](https://github.com/assemble)
+ [twitter.com/assemble](http://twitter.com/assemble)

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

_This file was generated by [grunt-verb](https://github.com/assemble/grunt-verb) on August 15, 2014._