# github-api [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image] [![Coverage Status][coveralls-image]][coveralls-url]

retrieve github stars.


## Install

```bash
$ npm install --save github-api
```


## Usage

###Get all stars

```javascript
var github-api = require('node-github-api');
github.getStars('kwakayama')
.then(function(stars) {
  console.dir(stars.length);
})
```

###Get all stars from last id onwards

```javascript
var github-api = require('node-github-api');
github.getStars('kwakayama', 18611173)
.then(function(stars) {
  console.dir(stars.length);
})
```

## API

_(Coming soon)_


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp](http://gulpjs.com/).


## Release History

_(Nothing yet)_


## License

Copyright (c) 2014 Kentaro Wakayama. Licensed under the MIT license.



[npm-url]: https://npmjs.org/package/node-github-api
[npm-image]: https://badge.fury.io/js/node-github-api.svg
[travis-url]: https://travis-ci.org/youngmountain/node-github-api
[travis-image]: https://travis-ci.org/youngmountain/node-github-api.svg?branch=master
[daviddm-url]: https://david-dm.org/youngmountain/node-github-api.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/youngmountain/node-github-api
[coveralls-url]: https://coveralls.io/r/youngmountain/node-github-api
[coveralls-image]: https://coveralls.io/repos/youngmountain/node-github-api/badge.png
