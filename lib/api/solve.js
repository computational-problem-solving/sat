'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.solve = solve;

var _core = require('../core');

var _marked = [solve].map(regeneratorRuntime.mark);

function solve(_ref) {
	var clauses = _ref.clauses,
	    n = _ref.n;
	return regeneratorRuntime.wrap(function solve$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					return _context.delegateYield((0, _core.SAT0W)(n, clauses, (0, _core.setup_watchlist)(n, clauses), (0, _core.setup_assignment)(n), 0), 't0', 1);

				case 1:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvc29sdmUuanMiXSwibmFtZXMiOlsic29sdmUiLCJjbGF1c2VzIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFaUJBLEssR0FBQUEsSzs7QUFGakI7O2VBRWlCQSxLOztBQUFWLFNBQVVBLEtBQVY7QUFBQSxLQUFvQkMsT0FBcEIsUUFBb0JBLE9BQXBCO0FBQUEsS0FBOEJDLENBQTlCLFFBQThCQSxDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBRUMsaUJBQU9BLENBQVAsRUFBV0QsT0FBWCxFQUFxQiwyQkFBaUJDLENBQWpCLEVBQXFCRCxPQUFyQixDQUFyQixFQUFzRCw0QkFBa0JDLENBQWxCLENBQXRELEVBQThFLENBQTlFLENBRkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic29sdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTQVQwVyAsIHNldHVwX3dhdGNobGlzdCwgc2V0dXBfYXNzaWdubWVudCB9IGZyb20gJy4uL2NvcmUnIDtcblxuZXhwb3J0IGZ1bmN0aW9uKiBzb2x2ZSAoIHsgY2xhdXNlcyAsIG4gfSApIHtcblxuXHR5aWVsZCogU0FUMFcoIG4gLCBjbGF1c2VzICwgc2V0dXBfd2F0Y2hsaXN0KCBuICwgY2xhdXNlcyApICwgc2V0dXBfYXNzaWdubWVudCggbiApICwgMCApIDtcblxufVxuXG4iXX0=