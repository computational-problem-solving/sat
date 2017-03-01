"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._count = _count;
function _count(clauses) {

	var c = -1;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = clauses[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var clause = _step.value;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = clause[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var literal = _step2.value;

					c = Math.max(c, literal >>> 1);
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

	return c + 1;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvX2NvdW50LmpzIl0sIm5hbWVzIjpbIl9jb3VudCIsImNsYXVzZXMiLCJjIiwiY2xhdXNlIiwibGl0ZXJhbCIsIk1hdGgiLCJtYXgiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQ2dCQSxNLEdBQUFBLE07QUFBVCxTQUFTQSxNQUFULENBQWtCQyxPQUFsQixFQUE0Qjs7QUFFbEMsS0FBSUMsSUFBSSxDQUFDLENBQVQ7O0FBRmtDO0FBQUE7QUFBQTs7QUFBQTtBQUlsQyx1QkFBc0JELE9BQXRCLDhIQUFnQztBQUFBLE9BQXBCRSxNQUFvQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUMvQiwwQkFBdUJBLE1BQXZCLG1JQUFnQztBQUFBLFNBQXBCQyxPQUFvQjs7QUFDL0JGLFNBQUlHLEtBQUtDLEdBQUwsQ0FBVUosQ0FBVixFQUFjRSxZQUFZLENBQTFCLENBQUo7QUFDQTtBQUg4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSS9CO0FBUmlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVWxDLFFBQU9GLElBQUksQ0FBWDtBQUVBIiwiZmlsZSI6Il9jb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIF9jb3VudCAoIGNsYXVzZXMgKSB7XG5cblx0bGV0IGMgPSAtMSA7XG5cblx0Zm9yICggY29uc3QgY2xhdXNlIG9mIGNsYXVzZXMgKSB7XG5cdFx0Zm9yICggY29uc3QgbGl0ZXJhbCBvZiBjbGF1c2UgKSB7XG5cdFx0XHRjID0gTWF0aC5tYXgoIGMgLCBsaXRlcmFsID4+PiAxICkgO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjICsgMSA7XG5cbn1cbiJdfQ==