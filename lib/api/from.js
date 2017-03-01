'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.from = undefined;

var _core = require('../core');

/**
 * The input is converted to parity format in each case.
 */
var from = exports.from = {
	/**
  * The input is in parity format where variables are given integer labels
  * 0 to n-1, a positive literal is represented by the double of its
  * variable's label, and a negative literal is represented by the successor
  * of the double of its variable's label.
  */
	parities: function parities(clauses) {
		return new _core.ParitiesInstance(clauses);
	},
	/**
  * The input is in signs format where variables are given integer labels
  * 1 to n, a positive literal is represented by its variable's label, and a
  * negative literal is represented by the opposite of its variable's label.
  */
	signs: _core._sign_to_parity,
	/**
  * The input is in keys format where variables are given arbitrary object labels,
  * a literal is represented by a pair from the set {true, false} x
  * labels, where the first item in the pair is true if the literal is positive,
  * and false otherwise.
  */
	keys: _core._keys_to_parity,
	/**
  * Parses a stream in DIMACS CNF format.
  */
	dcnf: function dcnf(stream) {
		return new _core.ParitiesInstance((0, _core._parse_DIMACS_CNF)(stream));
	}
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvZnJvbS5qcyJdLCJuYW1lcyI6WyJmcm9tIiwicGFyaXRpZXMiLCJjbGF1c2VzIiwic2lnbnMiLCJrZXlzIiwiZGNuZiIsInN0cmVhbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7QUFHTyxJQUFNQSxzQkFBTztBQUNuQjs7Ozs7O0FBTUFDLFdBQVcsa0JBQUVDLE9BQUY7QUFBQSxTQUFlLDJCQUFzQkEsT0FBdEIsQ0FBZjtBQUFBLEVBUFE7QUFRbkI7Ozs7O0FBS0FDLDZCQWJtQjtBQWNuQjs7Ozs7O0FBTUFDLDRCQXBCbUI7QUFxQm5COzs7QUFHQUMsT0FBTyxjQUFFQyxNQUFGO0FBQUEsU0FBYywyQkFBc0IsNkJBQW1CQSxNQUFuQixDQUF0QixDQUFkO0FBQUE7QUF4QlksQ0FBYiIsImZpbGUiOiJmcm9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFyaXRpZXNJbnN0YW5jZSAsIF9zaWduX3RvX3Bhcml0eSwgX2tleXNfdG9fcGFyaXR5LCBfcGFyc2VfRElNQUNTX0NORiB9IGZyb20gJy4uL2NvcmUnIDtcblxuLyoqXG4gKiBUaGUgaW5wdXQgaXMgY29udmVydGVkIHRvIHBhcml0eSBmb3JtYXQgaW4gZWFjaCBjYXNlLlxuICovXG5leHBvcnQgY29uc3QgZnJvbSA9IHtcblx0LyoqXG5cdCAqIFRoZSBpbnB1dCBpcyBpbiBwYXJpdHkgZm9ybWF0IHdoZXJlIHZhcmlhYmxlcyBhcmUgZ2l2ZW4gaW50ZWdlciBsYWJlbHNcblx0ICogMCB0byBuLTEsIGEgcG9zaXRpdmUgbGl0ZXJhbCBpcyByZXByZXNlbnRlZCBieSB0aGUgZG91YmxlIG9mIGl0c1xuXHQgKiB2YXJpYWJsZSdzIGxhYmVsLCBhbmQgYSBuZWdhdGl2ZSBsaXRlcmFsIGlzIHJlcHJlc2VudGVkIGJ5IHRoZSBzdWNjZXNzb3Jcblx0ICogb2YgdGhlIGRvdWJsZSBvZiBpdHMgdmFyaWFibGUncyBsYWJlbC5cblx0ICovXG5cdHBhcml0aWVzIDogKCBjbGF1c2VzICkgPT4gbmV3IFBhcml0aWVzSW5zdGFuY2UoIGNsYXVzZXMgKSAsXG5cdC8qKlxuXHQgKiBUaGUgaW5wdXQgaXMgaW4gc2lnbnMgZm9ybWF0IHdoZXJlIHZhcmlhYmxlcyBhcmUgZ2l2ZW4gaW50ZWdlciBsYWJlbHNcblx0ICogMSB0byBuLCBhIHBvc2l0aXZlIGxpdGVyYWwgaXMgcmVwcmVzZW50ZWQgYnkgaXRzIHZhcmlhYmxlJ3MgbGFiZWwsIGFuZCBhXG5cdCAqIG5lZ2F0aXZlIGxpdGVyYWwgaXMgcmVwcmVzZW50ZWQgYnkgdGhlIG9wcG9zaXRlIG9mIGl0cyB2YXJpYWJsZSdzIGxhYmVsLlxuXHQgKi9cblx0c2lnbnMgOiBfc2lnbl90b19wYXJpdHkgLFxuXHQvKipcblx0ICogVGhlIGlucHV0IGlzIGluIGtleXMgZm9ybWF0IHdoZXJlIHZhcmlhYmxlcyBhcmUgZ2l2ZW4gYXJiaXRyYXJ5IG9iamVjdCBsYWJlbHMsXG5cdCAqIGEgbGl0ZXJhbCBpcyByZXByZXNlbnRlZCBieSBhIHBhaXIgZnJvbSB0aGUgc2V0IHt0cnVlLCBmYWxzZX0geFxuXHQgKiBsYWJlbHMsIHdoZXJlIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBwYWlyIGlzIHRydWUgaWYgdGhlIGxpdGVyYWwgaXMgcG9zaXRpdmUsXG5cdCAqIGFuZCBmYWxzZSBvdGhlcndpc2UuXG5cdCAqL1xuXHRrZXlzIDogX2tleXNfdG9fcGFyaXR5ICxcblx0LyoqXG5cdCAqIFBhcnNlcyBhIHN0cmVhbSBpbiBESU1BQ1MgQ05GIGZvcm1hdC5cblx0ICovXG5cdGRjbmYgOiAoIHN0cmVhbSApID0+IG5ldyBQYXJpdGllc0luc3RhbmNlKCBfcGFyc2VfRElNQUNTX0NORiggc3RyZWFtICkgKVxufSA7XG4iXX0=