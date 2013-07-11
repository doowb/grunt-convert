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
});
```


### Options

#### pretty
Type: `int`  
Default: 0

This force pretty printing.

See [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js#options) for available options

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Please lint and test your code using [Grunt](http://gruntjs.com/).

## Authors

**Jon Schlinkert**

+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)
+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)


## License
[MIT License](LICENSE-MIT)

## Release History
_(Nothing yet)_
