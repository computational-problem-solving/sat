'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SignsInstance = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _count2 = require('./_count');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignsInstance = exports.SignsInstance = function () {
	function SignsInstance(clauses) {
		_classCallCheck(this, SignsInstance);

		this.clauses = clauses;
		this.n = (0, _count2._count)(clauses);
	}

	_createClass(SignsInstance, [{
		key: 'assignment',
		value: function assignment(certificate) {
			return [0].concat(certificate);
		}
	}]);

	return SignsInstance;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvU2lnbnNJbnN0YW5jZS5qcyJdLCJuYW1lcyI6WyJTaWduc0luc3RhbmNlIiwiY2xhdXNlcyIsIm4iLCJjZXJ0aWZpY2F0ZSIsImNvbmNhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7SUFFYUEsYSxXQUFBQSxhO0FBRVosd0JBQWNDLE9BQWQsRUFBd0I7QUFBQTs7QUFDdkIsT0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTLG9CQUFRRCxPQUFSLENBQVQ7QUFDQTs7Ozs2QkFFWUUsVyxFQUFjO0FBQzFCLFVBQU8sQ0FBRSxDQUFGLEVBQU1DLE1BQU4sQ0FBY0QsV0FBZCxDQUFQO0FBQ0EiLCJmaWxlIjoiU2lnbnNJbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9jb3VudCB9IGZyb20gJy4vX2NvdW50JyA7XG5cbmV4cG9ydCBjbGFzcyBTaWduc0luc3RhbmNlIHtcblxuXHRjb25zdHJ1Y3RvciAoIGNsYXVzZXMgKSB7XG5cdFx0dGhpcy5jbGF1c2VzID0gY2xhdXNlcyA7XG5cdFx0dGhpcy5uID0gX2NvdW50KCBjbGF1c2VzICkgO1xuXHR9XG5cblx0YXNzaWdubWVudCAoIGNlcnRpZmljYXRlICkge1xuXHRcdHJldHVybiBbIDAgXS5jb25jYXQoIGNlcnRpZmljYXRlICkgO1xuXHR9XG5cbn1cbiJdfQ==