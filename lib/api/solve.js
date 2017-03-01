'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solve = solve;

var _core = require('../core');

var _marked = [solve].map(regeneratorRuntime.mark);

/**
 * Yields all satisfying assignments for the input instance.
 *
 * @returns {Iterable} Generator of the satisfying assignments.
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvc29sdmUuanMiXSwibmFtZXMiOlsic29sdmUiLCJjbGF1c2VzIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFPaUJBLEssR0FBQUEsSzs7QUFQakI7O2VBT2lCQSxLOztBQUxqQjs7Ozs7QUFLTyxTQUFVQSxLQUFWO0FBQUEsTUFBb0JDLE9BQXBCLFFBQW9CQSxPQUFwQjtBQUFBLE1BQThCQyxDQUE5QixRQUE4QkEsQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUVDLGlCQUFPQSxDQUFQLEVBQVdELE9BQVgsRUFBcUIsMkJBQWlCQyxDQUFqQixFQUFxQkQsT0FBckIsQ0FBckIsRUFBc0QsNEJBQWtCQyxDQUFsQixDQUF0RCxFQUE4RSxDQUE5RSxDQUZEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InNvbHZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0FUMFcgLCBzZXR1cF93YXRjaGxpc3QsIHNldHVwX2Fzc2lnbm1lbnQgfSBmcm9tICcuLi9jb3JlJyA7XG5cbi8qKlxuICogWWllbGRzIGFsbCBzYXRpc2Z5aW5nIGFzc2lnbm1lbnRzIGZvciB0aGUgaW5wdXQgaW5zdGFuY2UuXG4gKlxuICogQHJldHVybnMge0l0ZXJhYmxlfSBHZW5lcmF0b3Igb2YgdGhlIHNhdGlzZnlpbmcgYXNzaWdubWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogc29sdmUgKCB7IGNsYXVzZXMgLCBuIH0gKSB7XG5cblx0eWllbGQqIFNBVDBXKCBuICwgY2xhdXNlcyAsIHNldHVwX3dhdGNobGlzdCggbiAsIGNsYXVzZXMgKSAsIHNldHVwX2Fzc2lnbm1lbnQoIG4gKSAsIDAgKSA7XG5cbn1cblxuIl19