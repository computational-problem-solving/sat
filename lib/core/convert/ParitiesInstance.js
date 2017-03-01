'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ParitiesInstance = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _count2 = require('./_count');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParitiesInstance = exports.ParitiesInstance = function () {
	function ParitiesInstance(clauses) {
		_classCallCheck(this, ParitiesInstance);

		this.clauses = clauses;
		this.n = (0, _count2._count)(clauses);
	}

	_createClass(ParitiesInstance, [{
		key: 'assignment',
		value: function assignment(certificate) {
			return certificate.slice();
		}
	}]);

	return ParitiesInstance;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvUGFyaXRpZXNJbnN0YW5jZS5qcyJdLCJuYW1lcyI6WyJQYXJpdGllc0luc3RhbmNlIiwiY2xhdXNlcyIsIm4iLCJjZXJ0aWZpY2F0ZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztJQUVhQSxnQixXQUFBQSxnQjtBQUVaLDJCQUFjQyxPQUFkLEVBQXdCO0FBQUE7O0FBQ3ZCLE9BQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLE9BQUtDLENBQUwsR0FBUyxvQkFBUUQsT0FBUixDQUFUO0FBQ0E7Ozs7NkJBRVlFLFcsRUFBYztBQUMxQixVQUFPQSxZQUFZQyxLQUFaLEVBQVA7QUFDQSIsImZpbGUiOiJQYXJpdGllc0luc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2NvdW50IH0gZnJvbSAnLi9fY291bnQnIDtcblxuZXhwb3J0IGNsYXNzIFBhcml0aWVzSW5zdGFuY2Uge1xuXG5cdGNvbnN0cnVjdG9yICggY2xhdXNlcyApIHtcblx0XHR0aGlzLmNsYXVzZXMgPSBjbGF1c2VzIDtcblx0XHR0aGlzLm4gPSBfY291bnQoIGNsYXVzZXMgKSA7XG5cdH1cblxuXHRhc3NpZ25tZW50ICggY2VydGlmaWNhdGUgKSB7XG5cdFx0cmV0dXJuIGNlcnRpZmljYXRlLnNsaWNlKCApIDtcblx0fVxuXG59XG4iXX0=