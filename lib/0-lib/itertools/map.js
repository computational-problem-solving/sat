"use strict";

var _marked = [map].map(regeneratorRuntime.mark);

function map(callable, iterable) {
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

	return regeneratorRuntime.wrap(function map$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 3;
					_iterator = iterable[Symbol.iterator]();

				case 5:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 12;
						break;
					}

					item = _step.value;
					_context.next = 9;
					return callable(item);

				case 9:
					_iteratorNormalCompletion = true;
					_context.next = 5;
					break;

				case 12:
					_context.next = 18;
					break;

				case 14:
					_context.prev = 14;
					_context.t0 = _context["catch"](3);
					_didIteratorError = true;
					_iteratorError = _context.t0;

				case 18:
					_context.prev = 18;
					_context.prev = 19;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 21:
					_context.prev = 21;

					if (!_didIteratorError) {
						_context.next = 24;
						break;
					}

					throw _iteratorError;

				case 24:
					return _context.finish(21);

				case 25:
					return _context.finish(18);

				case 26:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxpYi9pdGVydG9vbHMvbWFwLmpzIl0sIm5hbWVzIjpbIm1hcCIsImNhbGxhYmxlIiwiaXRlcmFibGUiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOztlQUFVQSxHOztBQUFWLFNBQVVBLEdBQVYsQ0FBZ0JDLFFBQWhCLEVBQTJCQyxRQUEzQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDcUJBLFFBRHJCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ2FDLFNBRGI7QUFBQTtBQUFBLFlBQ3NDRixTQUFVRSxJQUFWLENBRHRDOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoibWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24qIG1hcCAoIGNhbGxhYmxlICwgaXRlcmFibGUgKSB7XG5cdGZvciAoIGNvbnN0IGl0ZW0gb2YgaXRlcmFibGUgKSB5aWVsZCBjYWxsYWJsZSggaXRlbSApIDtcbn1cbiJdfQ==