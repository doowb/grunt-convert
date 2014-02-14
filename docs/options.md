##### type
Type: `String`  
Default: `undefined`

Define content when using unknown extension.

#### indent
Type: `Int`  
Default: `2`

Force indentation ("pretty printing") for JSON and YAML.

#### inline
Type: `Int`  
Default: `8`

Force indentation ("pretty printing")  for YAML only.

#### header
Type: `boolean`  
Default: false

Use when converting JSON/YAML to XML. Add XML tag header.

See [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js#options) for other available options

#### cvs.delimiter
Type: `string`  
Default: `,`

Set the field delimiter. One character only.

#### cvs.columns
Type: `boolean`  
Default: true

List of fields or true if autodiscovered in the first CSV line.

See [node-csv](https://github.com/wdavidw/node-csv/blob/master/doc/from.md#from.options) for other available options.