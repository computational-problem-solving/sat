'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SignsInstance = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _count2 = require('./_count');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignsInstance = exports.SignsInstance = function () {

	/**
  * Clauses are in parity format.
  */
	function SignsInstance(clauses) {
		_classCallCheck(this, SignsInstance);

		this.clauses = clauses;
		this.n = (0, _count2._count)(clauses);
	}

	/**
  * Returns assignment vector in signs format.
  */


	_createClass(SignsInstance, [{
		key: 'assignment',
		value: function assignment(certificate) {
			return [0].concat(certificate);
		}
	}]);

	return SignsInstance;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvU2lnbnNJbnN0YW5jZS5qcyJdLCJuYW1lcyI6WyJTaWduc0luc3RhbmNlIiwiY2xhdXNlcyIsIm4iLCJjZXJ0aWZpY2F0ZSIsImNvbmNhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7SUFFYUEsYSxXQUFBQSxhOztBQUVaOzs7QUFHQSx3QkFBY0MsT0FBZCxFQUF3QjtBQUFBOztBQUN2QixPQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxPQUFLQyxDQUFMLEdBQVMsb0JBQVFELE9BQVIsQ0FBVDtBQUNBOztBQUVEOzs7Ozs7OzZCQUdhRSxXLEVBQWM7QUFDMUIsVUFBTyxDQUFFLENBQUYsRUFBTUMsTUFBTixDQUFjRCxXQUFkLENBQVA7QUFDQSIsImZpbGUiOiJTaWduc0luc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2NvdW50IH0gZnJvbSAnLi9fY291bnQnIDtcblxuZXhwb3J0IGNsYXNzIFNpZ25zSW5zdGFuY2Uge1xuXG5cdC8qKlxuXHQgKiBDbGF1c2VzIGFyZSBpbiBwYXJpdHkgZm9ybWF0LlxuXHQgKi9cblx0Y29uc3RydWN0b3IgKCBjbGF1c2VzICkge1xuXHRcdHRoaXMuY2xhdXNlcyA9IGNsYXVzZXMgO1xuXHRcdHRoaXMubiA9IF9jb3VudCggY2xhdXNlcyApIDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFzc2lnbm1lbnQgdmVjdG9yIGluIHNpZ25zIGZvcm1hdC5cblx0ICovXG5cdGFzc2lnbm1lbnQgKCBjZXJ0aWZpY2F0ZSApIHtcblx0XHRyZXR1cm4gWyAwIF0uY29uY2F0KCBjZXJ0aWZpY2F0ZSApIDtcblx0fVxuXG59XG4iXX0=