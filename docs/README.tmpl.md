# {%= name %} [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %}) {% if (travis) { %} [![Build Status]({%= travis %}.png)]({%= travis %}){% } %}

> {%= description %}

## Getting Started

{%= _.doc("getting-started.md") %}

## Options

{%= _.doc("options.md") %}

## Usage Examples

{%= _.doc("examples-*.md") %}

## Contributing

Please see the [Contributing to Assemble](http://assemble.io/contributing) guide for information on contributing to this project.

## Authors

**Jon Schlinkert**

+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)
+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)

**Hariadi Hinta**

+ [http://twitter.com/hariadi](http://twitter.com/hariadi)
+ [http://github.com/hariadi](http://github.com/hariadi)

{% if (changelog) { %}
## Release History
{%= _.include("docs-changelog.md") %} 
{% } %}

## License
[MIT License](LICENSE-MIT)

***

_This file was generated on {%= grunt.template.today() %}._