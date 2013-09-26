
## Convert CSV to JSON

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
