'use strict';

var bind = require('function-bind');
var define = require('define-properties');

var trim = require('./implementation');

var boundTrim = bind.call(Function.call, trim);
define(boundTrim, {
	shim: function shimTrim() {
		var zeroWidthSpace = '\u200b';
		define(String.prototype, { trim: trim }, {
			trim: function () {
				return zeroWidthSpace.trim() !== zeroWidthSpace;
			}
		});
		return String.prototype.trim;
	}
});

module.exports = boundTrim;
