"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._count = _count;

/**
 * Counts the number of variables in a parity format clauses list.
 *
 * @param {Array} clauses The clauses list in parity format.
 * @returns {Number} The number of variables in the clauses list.
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvX2NvdW50LmpzIl0sIm5hbWVzIjpbIl9jb3VudCIsImNsYXVzZXMiLCJjIiwiY2xhdXNlIiwibGl0ZXJhbCIsIk1hdGgiLCJtYXgiXSwibWFwcGluZ3MiOiI7Ozs7O1FBT2dCQSxNLEdBQUFBLE07O0FBTmhCOzs7Ozs7QUFNTyxTQUFTQSxNQUFULENBQWtCQyxPQUFsQixFQUE0Qjs7QUFFbEMsS0FBSUMsSUFBSSxDQUFDLENBQVQ7O0FBRmtDO0FBQUE7QUFBQTs7QUFBQTtBQUlsQyx1QkFBc0JELE9BQXRCLDhIQUFnQztBQUFBLE9BQXBCRSxNQUFvQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUMvQiwwQkFBdUJBLE1BQXZCLG1JQUFnQztBQUFBLFNBQXBCQyxPQUFvQjs7QUFDL0JGLFNBQUlHLEtBQUtDLEdBQUwsQ0FBVUosQ0FBVixFQUFjRSxZQUFZLENBQTFCLENBQUo7QUFDQTtBQUg4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSS9CO0FBUmlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVWxDLFFBQU9GLElBQUksQ0FBWDtBQUVBIiwiZmlsZSI6Il9jb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBDb3VudHMgdGhlIG51bWJlciBvZiB2YXJpYWJsZXMgaW4gYSBwYXJpdHkgZm9ybWF0IGNsYXVzZXMgbGlzdC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjbGF1c2VzIFRoZSBjbGF1c2VzIGxpc3QgaW4gcGFyaXR5IGZvcm1hdC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1iZXIgb2YgdmFyaWFibGVzIGluIHRoZSBjbGF1c2VzIGxpc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfY291bnQgKCBjbGF1c2VzICkge1xuXG5cdGxldCBjID0gLTEgO1xuXG5cdGZvciAoIGNvbnN0IGNsYXVzZSBvZiBjbGF1c2VzICkge1xuXHRcdGZvciAoIGNvbnN0IGxpdGVyYWwgb2YgY2xhdXNlICkge1xuXHRcdFx0YyA9IE1hdGgubWF4KCBjICwgbGl0ZXJhbCA+Pj4gMSApIDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYyArIDEgO1xuXG59XG4iXX0=