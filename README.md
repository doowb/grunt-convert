# [grunt-convert v0.1.0](http://github.com/assemble/grunt-convert) [![Build Status](https://travis-ci.org/assemble/grunt-convert.png)](https://travis-ci.org/assemble/grunt-convert)

> Convert between XML, JSON and YAML, from one format to another.


## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-convert --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-convert');
```

## The "convert" task

### Overview
In your project's Gruntfile, add a section named `convert` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  convert: {
    options: {
      // Task-specific options go here.
    },
    yourtarget: {
      // Target-specific file lists and/or options go here.
    }
  }
})
```


### Options
_Documentation forthcoming_

#### format
Type: `String`
Default: `json`

Option to specify output format for dest files. Case insensitive, and may be either YAML or JSON format. Any of the following will work:

* `'yml'`, `'yaml'`, `'YML'`, `'YAML'`
* `'json'`, `'JSON'` (although these are uncessary since the task defaults to json)


#### sorted
Type: `Boolean`
Default: `false`

Sorts ouput objects and properties in alphabetical order.


#### indent
Type: `Number`
Default: `2`

Number of spaces to indent the output. Currently only works for `.json` files, not `.yml`.


#### debug
Type: `Boolean`
Default: `false`

When set to `true`, the output will include all omitted properties for inspection.



### Usage Examples
See some of the [example converts](https://github.com/assemble/grunt-convert/tree/master/test/actual) generated with this task.

Let's say the goal is to build a `component.json` from a `package.json`. We could: 

 * Do a one-to-one transfer of objects and properties
 * Override any objects or properties in the options by simply adding the new value to the options. 
 * Remove any objects or properties in the options by making the value `undefined` (this is a quick fix, will revisit but it works for now.)
 * Define new objects and properties in the options block.
 
``` js
convert: {
  options: {
    metadata: 'metadata.json', // optional source of metatdata
    name: 'grunt-convert'
    version: '0.1.0'           
    description: 'Generates JSON and/or YAML convert files from given source files or directories or source files.'
  },
  // build component.json from package.json
  package: {
    files: {
      'package.json': []
    }
  },
  component: {
    files: {
      'component.json': []
    }
  }
}
```


#### Default Options

``` js
convert: {
  options: {
    collections: true,
    debug: false,
    exclude: [],
    format: 'json',
    include: [],
    indent: 2,
    convertrc: [],
    metadata: [],
    sorted: false
  },
  // build component.json from package.json
  component: {
    files: {
      'component.json': ['package.json']
    }
  }
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Please lint and test your code using [Grunt](http://gruntjs.com/).

## Authors

**Jon Schlinkert**

+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)
+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)

**Brian Woodward**

+ [http://twitter.com/doowb](http://twitter.com/doowb)
+ [http://github.com/doowb](http://github.com/doowb)



## License
[MIT License](LICENSE-MIT)

## Release History
_(Nothing yet)_
