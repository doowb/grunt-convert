
## Convert XML to YAML

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

## Convert XML to JSON

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