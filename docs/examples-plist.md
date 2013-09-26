
## Convert PLIST to JSON

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

## Convert JSON to PLIST

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
