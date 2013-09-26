
## Convert JSON to XML

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


## Convert JSON to YAML

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