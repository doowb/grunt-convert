In this example, running `grunt convert:xml2yml` (or `grunt convert` because `convert` is a [multi task](http://gruntjs.com/creating-tasks#multi-tasks)) will convert the `convert.xml` source files and writing the output to `dist/convert.yml`.

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
