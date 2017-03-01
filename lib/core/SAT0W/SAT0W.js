'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SAT0W = SAT0W;

var _update_watchlist = require('./update_watchlist');

var _marked = [SAT0W].map(regeneratorRuntime.mark);

function SAT0W(n, clauses, watchlist, assignment, d) {
    var _arr, _i, a;

    return regeneratorRuntime.wrap(function SAT0W$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    if (!(d === n)) {
                        _context.next = 4;
                        break;
                    }

                    _context.next = 3;
                    return assignment;

                case 3:
                    return _context.abrupt('return');

                case 4:
                    _arr = [0, 1];
                    _i = 0;

                case 6:
                    if (!(_i < _arr.length)) {
                        _context.next = 14;
                        break;
                    }

                    a = _arr[_i];


                    assignment[d] = a;

                    if (!(0, _update_watchlist.update_watchlist)(watchlist, d << 1 | a, assignment)) {
                        _context.next = 11;
                        break;
                    }

                    return _context.delegateYield(SAT0W(n, clauses, watchlist, assignment, d + 1), 't0', 11);

                case 11:
                    _i++;
                    _context.next = 6;
                    break;

                case 14:

                    assignment[d] = -1;

                case 15:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL1NBVDBXL1NBVDBXLmpzIl0sIm5hbWVzIjpbIlNBVDBXIiwibiIsImNsYXVzZXMiLCJ3YXRjaGxpc3QiLCJhc3NpZ25tZW50IiwiZCIsImEiXSwibWFwcGluZ3MiOiI7Ozs7O1FBRWlCQSxLLEdBQUFBLEs7O0FBRmpCOztlQUVpQkEsSzs7QUFBVixTQUFVQSxLQUFWLENBQWtCQyxDQUFsQixFQUFzQkMsT0FBdEIsRUFBZ0NDLFNBQWhDLEVBQTRDQyxVQUE1QyxFQUF5REMsQ0FBekQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQU9FQSxNQUFNSixDQVBSO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsMkJBUU9HLFVBUlA7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLDJCQVlZLENBQUUsQ0FBRixFQUFNLENBQU4sQ0FaWjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBWU9FLHFCQVpQOzs7QUFjQ0YsK0JBQVdDLENBQVgsSUFBZ0JDLENBQWhCOztBQWRELHlCQWdCTSx3Q0FBa0JILFNBQWxCLEVBQStCRSxLQUFLLENBQU4sR0FBV0MsQ0FBekMsRUFBNkNGLFVBQTdDLENBaEJOO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtEQWlCWUosTUFBT0MsQ0FBUCxFQUFXQyxPQUFYLEVBQXFCQyxTQUFyQixFQUFpQ0MsVUFBakMsRUFBOENDLElBQUksQ0FBbEQsQ0FqQlo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBc0JIRCwrQkFBV0MsQ0FBWCxJQUFnQixDQUFDLENBQWpCOztBQXRCRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJTQVQwVy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVwZGF0ZV93YXRjaGxpc3QgfSBmcm9tICcuL3VwZGF0ZV93YXRjaGxpc3QnIDtcblxuZXhwb3J0IGZ1bmN0aW9uKiBTQVQwVyAoIG4gLCBjbGF1c2VzICwgd2F0Y2hsaXN0ICwgYXNzaWdubWVudCAsIGQgKSB7XG5cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSBzb2x2ZSBTQVQgYnkgYXNzaWduaW5nIHRvIHZhcmlhYmxlcyBkLCBkKzEsIC4uLiwgbi0xLiBBc3N1bWVzXG4gICAgICogdmFyaWFibGVzIDAsIC4uLiwgZC0xIGFyZSBhc3NpZ25lZCBzbyBmYXIuIEEgZ2VuZXJhdG9yIGZvciBhbGwgdGhlXG4gICAgICogc2F0aXNmeWluZyBhc3NpZ25tZW50cyBpcyByZXR1cm5lZC5cbiAgICAgKi9cbiAgICBpZiAoIGQgPT09IG4gKSB7XG4gICAgICAgIHlpZWxkIGFzc2lnbm1lbnQgO1xuICAgICAgICByZXR1cm4gO1xuICAgIH1cblxuICAgIGZvciAoIGxldCBhIG9mIFsgMCAsIDEgXSApIHtcblxuICAgICAgICBhc3NpZ25tZW50W2RdID0gYSA7XG5cbiAgICAgICAgaWYgKCB1cGRhdGVfd2F0Y2hsaXN0KCB3YXRjaGxpc3QgLCAoZCA8PCAxKSB8IGEgLCBhc3NpZ25tZW50ICkgKSB7XG4gICAgICAgICAgICB5aWVsZCogU0FUMFcoIG4gLCBjbGF1c2VzICwgd2F0Y2hsaXN0ICwgYXNzaWdubWVudCAsIGQgKyAxICkgO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBhc3NpZ25tZW50W2RdID0gLTEgO1xuXG59XG4iXX0=