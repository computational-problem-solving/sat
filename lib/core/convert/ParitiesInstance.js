'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ParitiesInstance = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _count2 = require('./_count');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParitiesInstance = exports.ParitiesInstance = function () {

	/**
  * Clauses are in parity format.
  */
	function ParitiesInstance(clauses) {
		_classCallCheck(this, ParitiesInstance);

		this.clauses = clauses;
		this.n = (0, _count2._count)(clauses);
	}

	/**
  * Returns assignment vector in parity format.
  */


	_createClass(ParitiesInstance, [{
		key: 'assignment',
		value: function assignment(certificate) {
			return certificate.slice();
		}
	}]);

	return ParitiesInstance;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvUGFyaXRpZXNJbnN0YW5jZS5qcyJdLCJuYW1lcyI6WyJQYXJpdGllc0luc3RhbmNlIiwiY2xhdXNlcyIsIm4iLCJjZXJ0aWZpY2F0ZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztJQUVhQSxnQixXQUFBQSxnQjs7QUFFWjs7O0FBR0EsMkJBQWNDLE9BQWQsRUFBd0I7QUFBQTs7QUFDdkIsT0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTLG9CQUFRRCxPQUFSLENBQVQ7QUFDQTs7QUFFRDs7Ozs7Ozs2QkFHYUUsVyxFQUFjO0FBQzFCLFVBQU9BLFlBQVlDLEtBQVosRUFBUDtBQUNBIiwiZmlsZSI6IlBhcml0aWVzSW5zdGFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfY291bnQgfSBmcm9tICcuL19jb3VudCcgO1xuXG5leHBvcnQgY2xhc3MgUGFyaXRpZXNJbnN0YW5jZSB7XG5cblx0LyoqXG5cdCAqIENsYXVzZXMgYXJlIGluIHBhcml0eSBmb3JtYXQuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoIGNsYXVzZXMgKSB7XG5cdFx0dGhpcy5jbGF1c2VzID0gY2xhdXNlcyA7XG5cdFx0dGhpcy5uID0gX2NvdW50KCBjbGF1c2VzICkgO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYXNzaWdubWVudCB2ZWN0b3IgaW4gcGFyaXR5IGZvcm1hdC5cblx0ICovXG5cdGFzc2lnbm1lbnQgKCBjZXJ0aWZpY2F0ZSApIHtcblx0XHRyZXR1cm4gY2VydGlmaWNhdGUuc2xpY2UoICkgO1xuXHR9XG5cbn1cbiJdfQ==