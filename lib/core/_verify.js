"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._verify = _verify;
function _verify(clauses, assignment) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		loop: for (var _iterator = clauses[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var clause = _step.value;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {

				for (var _iterator2 = clause[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var literal = _step2.value;


					if ((literal ^ assignment[literal >>> 1]) & 1) continue loop;
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return false;
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL192ZXJpZnkuanMiXSwibmFtZXMiOlsiX3ZlcmlmeSIsImNsYXVzZXMiLCJhc3NpZ25tZW50IiwibG9vcCIsImNsYXVzZSIsImxpdGVyYWwiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQ2dCQSxPLEdBQUFBLE87QUFBVCxTQUFTQSxPQUFULENBQW1CQyxPQUFuQixFQUE2QkMsVUFBN0IsRUFBMEM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFFaERDLE1BRmdELEVBRXpDLHFCQUFzQkYsT0FBdEIsOEhBQWdDO0FBQUEsT0FBcEJHLE1BQW9CO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUV0QywwQkFBdUJBLE1BQXZCLG1JQUFnQztBQUFBLFNBQXBCQyxPQUFvQjs7O0FBRS9CLFNBQUssQ0FBRUEsVUFBVUgsV0FBV0csWUFBWSxDQUF2QixDQUFaLElBQTBDLENBQS9DLEVBQW1ELFNBQVNGLElBQVQ7QUFFbkQ7QUFOcUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRdEMsVUFBTyxLQUFQO0FBRUE7QUFaK0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjaEQsUUFBTyxJQUFQO0FBRUEiLCJmaWxlIjoiX3ZlcmlmeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIF92ZXJpZnkgKCBjbGF1c2VzICwgYXNzaWdubWVudCApIHtcblxuXHRsb29wIDogZm9yICggY29uc3QgY2xhdXNlIG9mIGNsYXVzZXMgKSB7XG5cblx0XHRmb3IgKCBjb25zdCBsaXRlcmFsIG9mIGNsYXVzZSApIHtcblxuXHRcdFx0aWYgKCAoIGxpdGVyYWwgXiBhc3NpZ25tZW50W2xpdGVyYWwgPj4+IDFdICkgJiAxICkgY29udGludWUgbG9vcCA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2UgO1xuXG5cdH1cblxuXHRyZXR1cm4gdHJ1ZSA7XG5cbn1cbiJdfQ==