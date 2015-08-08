String.prototype.trim <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

[![browser support][testling-svg]][testling-url]

An ES5 spec-compliant `String.prototype.trim` shim. Invoke its "shim" method to shim `String.prototype.trim` if it is unavailable.

Most common usage:
```js
var trim = require('string.prototype.trim');

assert(trim(' \t\na \t\n') === 'a');

if (!String.prototype.trim) {
	trim.shim();
}

assert(trim(' \t\na \t\n') === ' \t\na \t\n'.trim());
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.com/package/string.prototype.trim
[npm-version-svg]: http://vb.teelaun.ch/es-shims/String.prototype.trim.svg
[travis-svg]: https://travis-ci.org/es-shims/String.prototype.trim.svg
[travis-url]: https://travis-ci.org/es-shims/String.prototype.trim
[deps-svg]: https://david-dm.org/es-shims/String.prototype.trim.svg
[deps-url]: https://david-dm.org/es-shims/String.prototype.trim
[dev-deps-svg]: https://david-dm.org/es-shims/String.prototype.trim/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/String.prototype.trim#info=devDependencies
[testling-svg]: https://ci.testling.com/es-shims/String.prototype.trim.png
[testling-url]: https://ci.testling.com/es-shims/String.prototype.trim
[npm-badge-png]: https://nodei.co/npm/string.prototype.trim.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/string.prototype.trim.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/string.prototype.trim.svg
[downloads-url]: http://npm-stat.com/charts.html?package=string.prototype.trim
