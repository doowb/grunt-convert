# grunt-convert [![NPM version](https://badge.fury.io/js/grunt-convert.png)](http://badge.fury.io/js/grunt-convert)  [![Build Status](https://travis-ci.org/assemble/grunt-convert.png)](https://travis-ci.org/assemble/grunt-convert)

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


## Contributing

Please see the [Contributing to Assemble](http://assemble.io/contributing) guide for information on contributing to this project.

## Authors

**Jon Schlinkert**

+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)
+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)

**Hariadi Hinta**

+ [http://twitter.com/hariadi](http://twitter.com/hariadi)
+ [http://github.com/hariadi](http://github.com/hariadi)


## Release History
 


## License
[MIT License](LICENSE-MIT)

***

_This file was generated on Mon Dec 02 2013 09:16:17._