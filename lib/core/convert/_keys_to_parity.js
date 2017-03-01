'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._keys_to_parity = _keys_to_parity;

var _KeysInstance = require('./KeysInstance');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _keys_to_parity(clauses) {

	var keys = new Map();
	var variables = [];

	var instance = [];

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = clauses[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var clause = _step.value;


			var new_clause = new Set();

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = clause[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var _ref = _step2.value;

					var _ref2 = _slicedToArray(_ref, 2);

					var positive = _ref2[0];
					var variable = _ref2[1];


					if (!keys.has(variable)) {
						keys.set(variable, variables.length);
						variables.push(variable);
					}

					var negated = positive ? 0 : 1;
					var literal = keys.get(variable) << 1 | negated;

					new_clause.add(literal);
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

			instance.push([].concat(_toConsumableArray(new_clause)));
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

	return new _KeysInstance.KeysInstance(variables, instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvX2tleXNfdG9fcGFyaXR5LmpzIl0sIm5hbWVzIjpbIl9rZXlzX3RvX3Bhcml0eSIsImNsYXVzZXMiLCJrZXlzIiwiTWFwIiwidmFyaWFibGVzIiwiaW5zdGFuY2UiLCJjbGF1c2UiLCJuZXdfY2xhdXNlIiwiU2V0IiwicG9zaXRpdmUiLCJ2YXJpYWJsZSIsImhhcyIsInNldCIsImxlbmd0aCIsInB1c2giLCJuZWdhdGVkIiwibGl0ZXJhbCIsImdldCIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFHZ0JBLGUsR0FBQUEsZTs7QUFIaEI7Ozs7QUFHTyxTQUFTQSxlQUFULENBQTJCQyxPQUEzQixFQUFxQzs7QUFFM0MsS0FBTUMsT0FBTyxJQUFJQyxHQUFKLEVBQWI7QUFDQSxLQUFNQyxZQUFZLEVBQWxCOztBQUVBLEtBQU1DLFdBQVcsRUFBakI7O0FBTDJDO0FBQUE7QUFBQTs7QUFBQTtBQU8zQyx1QkFBc0JKLE9BQXRCLDhIQUFnQztBQUFBLE9BQXBCSyxNQUFvQjs7O0FBRS9CLE9BQU1DLGFBQWEsSUFBSUMsR0FBSixFQUFuQjs7QUFGK0I7QUFBQTtBQUFBOztBQUFBO0FBSS9CLDBCQUF1Q0YsTUFBdkMsbUlBQWdEO0FBQUE7O0FBQUE7O0FBQUEsU0FBbENHLFFBQWtDO0FBQUEsU0FBdkJDLFFBQXVCOzs7QUFFL0MsU0FBSyxDQUFDUixLQUFLUyxHQUFMLENBQVVELFFBQVYsQ0FBTixFQUE2QjtBQUM1QlIsV0FBS1UsR0FBTCxDQUFVRixRQUFWLEVBQXFCTixVQUFVUyxNQUEvQjtBQUNBVCxnQkFBVVUsSUFBVixDQUFnQkosUUFBaEI7QUFDQTs7QUFFRCxTQUFNSyxVQUFVTixXQUFXLENBQVgsR0FBZSxDQUEvQjtBQUNBLFNBQU1PLFVBQVVkLEtBQUtlLEdBQUwsQ0FBVVAsUUFBVixLQUF3QixDQUF4QixHQUE0QkssT0FBNUM7O0FBRUFSLGdCQUFXVyxHQUFYLENBQWdCRixPQUFoQjtBQUVBO0FBaEI4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCL0JYLFlBQVNTLElBQVQsOEJBQW9CUCxVQUFwQjtBQUVBO0FBM0IwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTZCM0MsUUFBTywrQkFBa0JILFNBQWxCLEVBQThCQyxRQUE5QixDQUFQO0FBRUEiLCJmaWxlIjoiX2tleXNfdG9fcGFyaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5c0luc3RhbmNlIH0gZnJvbSAnLi9LZXlzSW5zdGFuY2UnIDtcblxuXG5leHBvcnQgZnVuY3Rpb24gX2tleXNfdG9fcGFyaXR5ICggY2xhdXNlcyApIHtcblxuXHRjb25zdCBrZXlzID0gbmV3IE1hcCggKSA7XG5cdGNvbnN0IHZhcmlhYmxlcyA9IFsgXSA7XG5cblx0Y29uc3QgaW5zdGFuY2UgPSBbIF0gO1xuXG5cdGZvciAoIGNvbnN0IGNsYXVzZSBvZiBjbGF1c2VzICkge1xuXG5cdFx0Y29uc3QgbmV3X2NsYXVzZSA9IG5ldyBTZXQoICkgO1xuXG5cdFx0Zm9yICggY29uc3QgWyBwb3NpdGl2ZSAsIHZhcmlhYmxlIF0gb2YgY2xhdXNlICkge1xuXG5cdFx0XHRpZiAoICFrZXlzLmhhcyggdmFyaWFibGUgKSApIHtcblx0XHRcdFx0a2V5cy5zZXQoIHZhcmlhYmxlICwgdmFyaWFibGVzLmxlbmd0aCApIDtcblx0XHRcdFx0dmFyaWFibGVzLnB1c2goIHZhcmlhYmxlICkgO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBuZWdhdGVkID0gcG9zaXRpdmUgPyAwIDogMSA7XG5cdFx0XHRjb25zdCBsaXRlcmFsID0ga2V5cy5nZXQoIHZhcmlhYmxlICkgPDwgMSB8IG5lZ2F0ZWQgO1xuXG5cdFx0XHRuZXdfY2xhdXNlLmFkZCggbGl0ZXJhbCApIDtcblxuXHRcdH1cblxuXHRcdGluc3RhbmNlLnB1c2goIFsgLi4ubmV3X2NsYXVzZSBdICkgO1xuXG5cdH1cblxuXHRyZXR1cm4gbmV3IEtleXNJbnN0YW5jZSggdmFyaWFibGVzICwgaW5zdGFuY2UgKSA7XG5cbn1cbiJdfQ==