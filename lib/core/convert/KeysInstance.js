'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.KeysInstance = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _certificate_to_keys2 = require('./_certificate_to_keys');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeysInstance = exports.KeysInstance = function () {
	function KeysInstance(variables, clauses) {
		_classCallCheck(this, KeysInstance);

		this.variables = variables;
		this.clauses = clauses;
		this.n = this.variables.length;
	}

	_createClass(KeysInstance, [{
		key: 'assignment',
		value: function assignment(certificate) {
			return (0, _certificate_to_keys2._certificate_to_keys)(this.variables, certificate);
		}
	}]);

	return KeysInstance;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvS2V5c0luc3RhbmNlLmpzIl0sIm5hbWVzIjpbIktleXNJbnN0YW5jZSIsInZhcmlhYmxlcyIsImNsYXVzZXMiLCJuIiwibGVuZ3RoIiwiY2VydGlmaWNhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0lBRWFBLFksV0FBQUEsWTtBQUVaLHVCQUFjQyxTQUFkLEVBQTBCQyxPQUExQixFQUFvQztBQUFBOztBQUNuQyxPQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLE9BQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLE9BQUtDLENBQUwsR0FBUyxLQUFLRixTQUFMLENBQWVHLE1BQXhCO0FBQ0E7Ozs7NkJBRVlDLFcsRUFBYztBQUMxQixVQUFPLGdEQUFzQixLQUFLSixTQUEzQixFQUF1Q0ksV0FBdkMsQ0FBUDtBQUNBIiwiZmlsZSI6IktleXNJbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9jZXJ0aWZpY2F0ZV90b19rZXlzIH0gZnJvbSAnLi9fY2VydGlmaWNhdGVfdG9fa2V5cycgO1xuXG5leHBvcnQgY2xhc3MgS2V5c0luc3RhbmNlIHtcblxuXHRjb25zdHJ1Y3RvciAoIHZhcmlhYmxlcyAsIGNsYXVzZXMgKSB7XG5cdFx0dGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXMgO1xuXHRcdHRoaXMuY2xhdXNlcyA9IGNsYXVzZXMgO1xuXHRcdHRoaXMubiA9IHRoaXMudmFyaWFibGVzLmxlbmd0aCA7XG5cdH1cblxuXHRhc3NpZ25tZW50ICggY2VydGlmaWNhdGUgKSB7XG5cdFx0cmV0dXJuIF9jZXJ0aWZpY2F0ZV90b19rZXlzKCB0aGlzLnZhcmlhYmxlcyAsIGNlcnRpZmljYXRlICkgO1xuXHR9XG5cbn1cbiJdfQ==