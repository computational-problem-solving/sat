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
  * Parses a character iterable in DIMACS CNF format.
  */
	dcnf: function dcnf(iterable) {
		return new _core.ParitiesInstance((0, _core._parse_DIMACS_CNF)(iterable));
	}
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvZnJvbS5qcyJdLCJuYW1lcyI6WyJmcm9tIiwicGFyaXRpZXMiLCJjbGF1c2VzIiwic2lnbnMiLCJrZXlzIiwiZGNuZiIsIml0ZXJhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7OztBQUdPLElBQU1BLHNCQUFPO0FBQ25COzs7Ozs7QUFNQUMsV0FBVyxrQkFBRUMsT0FBRjtBQUFBLFNBQWUsMkJBQXNCQSxPQUF0QixDQUFmO0FBQUEsRUFQUTtBQVFuQjs7Ozs7QUFLQUMsNkJBYm1CO0FBY25COzs7Ozs7QUFNQUMsNEJBcEJtQjtBQXFCbkI7OztBQUdBQyxPQUFPLGNBQUVDLFFBQUY7QUFBQSxTQUFnQiwyQkFBc0IsNkJBQW1CQSxRQUFuQixDQUF0QixDQUFoQjtBQUFBO0FBeEJZLENBQWIiLCJmaWxlIjoiZnJvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcml0aWVzSW5zdGFuY2UgLCBfc2lnbl90b19wYXJpdHksIF9rZXlzX3RvX3Bhcml0eSwgX3BhcnNlX0RJTUFDU19DTkYgfSBmcm9tICcuLi9jb3JlJyA7XG5cbi8qKlxuICogVGhlIGlucHV0IGlzIGNvbnZlcnRlZCB0byBwYXJpdHkgZm9ybWF0IGluIGVhY2ggY2FzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZyb20gPSB7XG5cdC8qKlxuXHQgKiBUaGUgaW5wdXQgaXMgaW4gcGFyaXR5IGZvcm1hdCB3aGVyZSB2YXJpYWJsZXMgYXJlIGdpdmVuIGludGVnZXIgbGFiZWxzXG5cdCAqIDAgdG8gbi0xLCBhIHBvc2l0aXZlIGxpdGVyYWwgaXMgcmVwcmVzZW50ZWQgYnkgdGhlIGRvdWJsZSBvZiBpdHNcblx0ICogdmFyaWFibGUncyBsYWJlbCwgYW5kIGEgbmVnYXRpdmUgbGl0ZXJhbCBpcyByZXByZXNlbnRlZCBieSB0aGUgc3VjY2Vzc29yXG5cdCAqIG9mIHRoZSBkb3VibGUgb2YgaXRzIHZhcmlhYmxlJ3MgbGFiZWwuXG5cdCAqL1xuXHRwYXJpdGllcyA6ICggY2xhdXNlcyApID0+IG5ldyBQYXJpdGllc0luc3RhbmNlKCBjbGF1c2VzICkgLFxuXHQvKipcblx0ICogVGhlIGlucHV0IGlzIGluIHNpZ25zIGZvcm1hdCB3aGVyZSB2YXJpYWJsZXMgYXJlIGdpdmVuIGludGVnZXIgbGFiZWxzXG5cdCAqIDEgdG8gbiwgYSBwb3NpdGl2ZSBsaXRlcmFsIGlzIHJlcHJlc2VudGVkIGJ5IGl0cyB2YXJpYWJsZSdzIGxhYmVsLCBhbmQgYVxuXHQgKiBuZWdhdGl2ZSBsaXRlcmFsIGlzIHJlcHJlc2VudGVkIGJ5IHRoZSBvcHBvc2l0ZSBvZiBpdHMgdmFyaWFibGUncyBsYWJlbC5cblx0ICovXG5cdHNpZ25zIDogX3NpZ25fdG9fcGFyaXR5ICxcblx0LyoqXG5cdCAqIFRoZSBpbnB1dCBpcyBpbiBrZXlzIGZvcm1hdCB3aGVyZSB2YXJpYWJsZXMgYXJlIGdpdmVuIGFyYml0cmFyeSBvYmplY3QgbGFiZWxzLFxuXHQgKiBhIGxpdGVyYWwgaXMgcmVwcmVzZW50ZWQgYnkgYSBwYWlyIGZyb20gdGhlIHNldCB7dHJ1ZSwgZmFsc2V9IHhcblx0ICogbGFiZWxzLCB3aGVyZSB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgcGFpciBpcyB0cnVlIGlmIHRoZSBsaXRlcmFsIGlzIHBvc2l0aXZlLFxuXHQgKiBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQgKi9cblx0a2V5cyA6IF9rZXlzX3RvX3Bhcml0eSAsXG5cdC8qKlxuXHQgKiBQYXJzZXMgYSBjaGFyYWN0ZXIgaXRlcmFibGUgaW4gRElNQUNTIENORiBmb3JtYXQuXG5cdCAqL1xuXHRkY25mIDogKCBpdGVyYWJsZSApID0+IG5ldyBQYXJpdGllc0luc3RhbmNlKCBfcGFyc2VfRElNQUNTX0NORiggaXRlcmFibGUgKSApXG59IDtcbiJdfQ==